import axios from 'axios';

const notionApi = axios.create({
  baseURL: 'https://api.notion.com/v1',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28'
  }
});

export const getDatabase = async (databaseId) => {
  try {
    const response = await notionApi.get(`/databases/${databaseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
};

export const getPage = async (pageId) => {
  try {
    const response = await notionApi.get(`/pages/${pageId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
};