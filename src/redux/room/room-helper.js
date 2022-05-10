const hotelURL = 'https://hotelzilla-api.herokuapp.com/api/rooms';

const getAllRooms = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

export default getAllRooms;
