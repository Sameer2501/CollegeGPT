const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const collegeData = require('./data.json');
require('dotenv').config();
const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "https://college-gpt-dmi3.vercel.app",
  methods: ["GET", "POST"]
}));


app.post('/webhook', async (req, res) => {
  const userQuestion = req.body.question;
//https://localhost:3000/webhook/ask
  try {
    const geminiResponse = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Answer this question based only on the following college data:\n${JSON.stringify(collegeData)}\n\nQuestion: ${userQuestion}`
              }
            ]
          }
        ]
      }
    );

    const answer = geminiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text || "No answer";

    res.json({
      message: "Success",
      answer: answer
    });

  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Gemini API error", details: error.response?.data || error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

