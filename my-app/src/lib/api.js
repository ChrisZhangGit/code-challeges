import axios from "axios";

export const getDataFromUsersAPI = async () => {
  return await axios.get("https://dummyjson.com/users");
};
export const getDataFromProductsAPI = async () => {
  return await axios.get("https://dummyjson.com/products");
};

const api = {
  getDataFromUsersAPI,
  getDataFromProductsAPI,
};

export default api;
