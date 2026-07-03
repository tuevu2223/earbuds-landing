const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = 5000;

const openai = new OpenAI({
  apiKey: "sk-464995033d08dce9-jnnuo1-0274eb51",
  baseURL: "http://localhost:20128/v1"
});

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "ag/gemini-3-flash",
      messages: [{ role: "user", content: message }],
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
