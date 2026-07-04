require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Đọc toàn bộ file kiến thức một lần duy nhất khi khởi động
const knowledgePath = path.join(__dirname, 'knowledge.txt');
const knowledgeData = fs.readFileSync(knowledgePath, 'utf8');

const systemPrompt = `Bạn là nhân viên tư vấn bán hàng của Alpha Works. Hãy trả lời ngắn gọn và chính xác dựa trên thông tin cốt lõi sau:\n\n${knowledgeData}\n\nQuy tắc phục vụ:\n- Luôn xưng hô "Dạ, bên em..." hoặc "Dạ, sản phẩm này...".\n- Nếu khách hỏi giá hoặc khuyến mãi, hãy đáp: "Dạ, hiện tại dòng tai nghe Alpha Works đang có chương trình ưu đãi giá cực tốt kèm quà tặng đặc biệt riêng trong hôm nay. Anh/Chị vui lòng để lại Số Điện Thoại, nhân viên tư vấn bên em sẽ liên hệ gửi bảng giá ưu đãi mới nhất cho mình ngay ạ!"\n- KHÔNG bịa đặt thông tin ngoài tài liệu.`;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
      }
    });
    
    res.json({
      response: response.text
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  console.log(`[AI] Context Loaded & Ready to Serve!`);
});
