const hostURL = 'https://hotelzilla-api.herokuapp.com';

const handleImage = (img) => (img ? `${hostURL}${img.url}` : 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');

export default handleImage;
