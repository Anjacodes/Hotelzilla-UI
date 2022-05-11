const hotelURL = 'https://hotelzilla-api.herokuapp.com/api/hotels';

const getAllHotelsAsync = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

export default getAllHotelsAsync;
