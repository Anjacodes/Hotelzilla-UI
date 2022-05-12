const hotelURL = 'https://hotelzilla-api.herokuapp.com/api/hotels';

const getAllHotelsAsync = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

const postHotelAsync = async (token, formData) => {
  const response = await fetch(hotelURL, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};

export { postHotelAsync };

export default getAllHotelsAsync;
