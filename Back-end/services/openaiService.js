// services/openaiService.js
const axios = require('axios');

async function handlePrompt(question) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const response = await axios.post(endpoint,
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = { handlePrompt };
