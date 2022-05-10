import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk, resetCreation } from '../redux/register/registerSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerThunk(form));
  };

  const registerStatus = useSelector((store) => store.register.userCreation);
  console.log('registerStatus', registerStatus);

  useEffect(() => {
    if (registerStatus === 'fulfilled') {
      setForm({
        name: '',
        username: '',
        email: '',
        password: '',
      });

      setTimeout(() => {
        dispatch(resetCreation());
        navigate('/login', { replace: true });
      }, 3000);
    }
  }, [registerStatus]);

  if (registerStatus === 'fulfilled') {
    return (
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <section className="border rounded-md py-2 px-4">
          <h4 className="font-Taxicab text-3xl">Registration successfull!</h4>
          <p className="mt-4">You are going to be redirected to Login Screen</p>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <section className="-mt-10">
        <header>
          <img src="Hotelzilla-logo.png" alt="" width="200" />
          <h3 className="text-center font-semibold text-2xl font-Taxicab uppercase">
            Register
          </h3>
        </header>
        <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm mt-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border rounded px-2 py-1 hover:ring-1"
              name="name"
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mt-1" htmlFor="username">
              Username:
            </label>
            <input
              className="border rounded px-2 py-1 hover:ring-1"
              name="username"
              id="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mt-1" htmlFor="email">
              Email:
            </label>
            <input
              className="border rounded px-2 py-1 hover:ring-1"
              name="email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mt-1" htmlFor="password">
              Password:
            </label>
            <input
              className="border rounded px-2 py-1 hover:ring-1"
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-sm" htmlFor="show-password">
              Show password?
            </label>
            <input
              className="hover:ring-1"
              type="checkbox"
              name="show-password"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            className="bg-green-500 w-full rounded-md py-1 font-bold text-white hover:bg-green-300 hover:text-green-800 flex px-2 items-center"
            type="submit">
            <p className="grow ml-5">Sign Up</p>
            <svg
              class={`${
                registerStatus === 'pending' ? 'text-white' : 'text-transparent'
              } animate-spin h-5 w-5`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>

          {registerStatus === 'rejected' && (
            <div className="bg-red-300 text-red-600 italic text-sm rounded-md px-2 py-1">
              Username not available
              <br />
              Please try a different username
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default SignUp;
