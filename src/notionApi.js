import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getDatabase = async (databaseId) => {
  try {
    const response = await apiClient.get(`/database/${databaseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
};

// export const getPage = async (pageId) => {
//   try {
//     const response = await apiClient.get(`/page/${pageId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching page:', error);
//     throw error;
//   }
// };