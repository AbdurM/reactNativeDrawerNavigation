import axiosInstance from './axios';

export const fetchBreeds = async () => {
  try {
    const response = await axiosInstance.get('breeds');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
