const hotelURL = 'http://127.0.0.1:3000/api/hotels';

const getAllHotels = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

export default getAllHotels;
