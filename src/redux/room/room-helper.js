const hotelURL = 'https://hotelzilla-api.herokuapp.com/rooms';

const getAllRooms = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

export default getAllRooms;
