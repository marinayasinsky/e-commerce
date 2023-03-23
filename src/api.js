import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com';

export const getProducts = () => {
  return axios.get(`${apiUrl}/products`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return [];
    });
};

export const getProductById = (productId) => {
  return axios.get(`${apiUrl}/products/${productId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return null;
    });
};

export const getAllData = () => {
  return axios.all([getProducts()])
    .then(axios.spread((products) => {
      return {
        products,
      };
    }))
    .catch(error => {
      console.error(error);
      return {};
    });
};
