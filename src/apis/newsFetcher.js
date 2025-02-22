import axios from "axios";

export const newsFetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
