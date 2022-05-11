const citiesURL = 'http://127.0.0.1:3000/api/cities';

const getAllCities = async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
};

export default getAllCities;
