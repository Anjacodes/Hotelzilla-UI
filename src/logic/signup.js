const signup = async (formData) => {
  const url = 'https://hotelzilla-api.herokuapp.com/users';
  const signUpHeader = new Headers([['Content-Type', 'application/json']]);

  const response = await fetch(url, {
    method: 'POST',
    signUpHeader,
    body: JSON.stringify(formData),
  });
  // todo: handle the answer from the server
  if (!response) console.log('Connection error');
  if (response.ok) return response.json();
  else console.log('Invalid fetch');
};

export default signup;
