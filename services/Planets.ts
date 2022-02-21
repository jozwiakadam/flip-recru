import axios from './apiService';

export const getPlanets = async (page: number) => {
  const { data } = await axios.get(`/planets/?page=${page}`);
  return data;
};

export const getPlanet = async (id: number) => {
  const { data } = await axios.get(`/planets/${id}`);
  return data;
};
