const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs');

const app = express();
const PORT = 5000;

const openai = new OpenAI({
  apiKey: "sk-464995033d08dce9-jnnuo1-0274eb51",
  baseURL: "http://localhost:20128/v1"
});

const chunks = [];
let embedder;

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function initRAG() {
  try {
    const { pipeline } = await import('@xenova/transformers');
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    const text = fs.readFileSync('knowledge.txt', 'utf8');
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    
    for (const p of paragraphs) {
      const output = await embedder(p, { pooling: 'mean', normalize: true });
      chunks.push({
        text: p,
        vector: Array.from(output.data)
      });
    }
  } catch (err) {
    console.error(err);
  }
}

initRAG();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const output = await embedder(message, { pooling: 'mean', normalize: true });
    const messageVector = Array.from(output.data);

    const scoredChunks = chunks.map(chunk => ({
      text: chunk.text,
      score: cosineSimilarity(messageVector, chunk.vector)
    }));

    scoredChunks.sort((a, b) => b.score - a.score);
    const topChunks = scoredChunks.slice(0, 3).map(c => c.text).join('\n\n');

    const systemPrompt = `Bạn là nhân viên tư vấn bán hàng của Alpha Works. Hãy trả lời ngắn gọn và chính xác dựa trên thông tin sau:\n\n${topChunks}\n\nQuy tắc phục vụ:\n- Luôn xưng hô "Dạ, bên em..." hoặc "Dạ, sản phẩm này...".\n- Nếu khách hỏi giá hoặc khuyến mãi, hãy đáp: "Dạ, hiện tại dòng tai nghe Alpha Works đang có chương trình ưu đãi giá cực tốt kèm quà tặng đặc biệt riêng trong hôm nay. Anh/Chị vui lòng để lại Số Điện Thoại, nhân viên tư vấn bên em sẽ liên hệ gửi bảng giá ưu đãi mới nhất cho mình ngay ạ!"\n- KHÔNG bịa đặt thông tin ngoài tài liệu.`;

    const completion = await openai.chat.completions.create({
      model: "ag/gemini-3-flash",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
    });
    
    const text = completion.choices[0].message.content;

    res.json({
      response: text
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
