import React from 'react';

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="-mt-10">
        <img src="Hotelzilla-logo.png" alt="" width="200" />
        <form action="#" method="post">
          <label htmlFor="name">Name:</label> <br />
          <input
            className="border rounded px-2 py-1"
            name="name"
            id="name"
            type="text"
          />
          <br />
          <label htmlFor="email">Email:</label> <br />
          <input
            className="border rounded px-2 py-1"
            name="email"
            id="email"
            type="email"
          />
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input
            className="border rounded px-2 py-1"
            name="password"
            id="password"
            type="password"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
