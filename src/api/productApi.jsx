export const fetchProducts = async () => {
    const response = await fetch('https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json');
    const data = await response.json();
    return data.data;
  };
  