const signup = async (formData) => {
  const url = '';
  const signUpHeader = new Headers([['Content-Type', 'application/json']]);

  const response = await fetch(url, {
    method: 'POST',
    signUpHeader,
    body: JSON.stringify(formData),
  });
  if (!response) console.log('Connection error');
  if (response.ok) return response.json();
  else console.log('Invalid fetch');
  // fetch data
  // check for response
  // render an appropiate answer
};

export default signup;
