const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3001;

// Configura CORS
app.use(cors());

const notionApi = axios.create({
  baseURL: 'https://api.notion.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28'
  }
});

app.get('/api/database/:id', async (req, res) => {
  try {
    const response = await notionApi.get(`/databases/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching database:', error.response.data);
    res.status(500).send('Error fetching database');
  }
});

// app.get('/api/page/:id', async (req, res) => {
//   try {
//     const response = await notionApi.get(`/pages/${req.params.id}`);
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching page:', error.response.data);
//     res.status(500).send('Error fetching page');
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Notion API Key:', process.env.NOTION_API_KEY);
  console.log('Process:', process);
});