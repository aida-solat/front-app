import axios from 'axios';

export function getProducts() {
  return axios
    .get('https://app-dccapi-stag-0001.azurewebsites.net/api/products')
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

