// routes/gptRoutes.js
const express = require('express');
const router = express.Router();
const { handlePrompt } = require('../../services/openaiService');

router.post('/ask', async (req, res) => {
  
  const { question } = req.body;
  try {
    const answer = await handlePrompt(question);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch GPT response' });
  }
});

module.exports = router;
