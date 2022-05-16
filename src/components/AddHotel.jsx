import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHotel } from '../redux/hotel/hotel';
import { getAllCities } from '../redux/city/city';

const AddHotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, []);

  const [newHotel, setNewHotel] = useState({
    name: '',
    description: '',
    image: null,
    rating: 1,
    city: 0,
  });

  const onChangeHandler = (event) => {
    if (event.target.name === 'image') {
      setNewHotel({ ...newHotel, [event.target.name]: event.target.files[0] });
    } else {
      setNewHotel({ ...newHotel, [event.target.name]: event.target.value });
    }
  };

  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const cities = useSelector((state) => state.city.all);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (newHotel.city !== 0) {
      document.querySelector('#city-error').classList.add('hidden');
      const formData = new FormData();
      formData.append('name', newHotel.name);
      formData.append('description', newHotel.description);
      formData.append('rating', newHotel.rating);
      formData.append('image', newHotel.image);
      formData.append('city_id', newHotel.city);

      dispatch(addHotel({hotel: formData, token, goToHome: () => navigate('/', { replace: true })}))
    } else {
      document.querySelector('#city-error').classList.remove('hidden');
    }
  };

  return (
    <div className="pt-[10vh] flex justify-center items-center h-screen">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 items-end p-9 w-sm-3/4"
      >
        <img
          className="md:hidden self-center w-4/12 w-sm-6/12"
          src="Hotelzilla-logo.png"
          alt=""
        />
        <h2 className="w-full text-center text-3xl text-gray-800">Add a New Hotel</h2>
        <div className="w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter hotel name"
            value={newHotel.name}
            onChange={onChangeHandler}
            autoComplete="off"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.5"
            value={newHotel.rating}
            onChange={onChangeHandler}
            autoComplete="off"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full">
          <label htmlFor="city">City</label>
          <select
            name="city"
            onChange={onChangeHandler}
            autoComplete="off"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={'defaultSelect'}
            required
          >
            <option value="defaultSelect" disabled>
              Select a city:
            </option>
            {cities.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
          <p id="city-error" className="w-full text-red-600 hidden">
            Please enter a valid city name
          </p>
        </div>
        <div className="w-full">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Enter hotel description"
            value={newHotel.description}
            onChange={onChangeHandler}
            autoComplete="off"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            multiple={false}
            onChange={onChangeHandler}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-lime-400 hover:bg-gray-200 text-white py-2 appearance-none border rounded px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
      <i
        className="fa-solid fa-caret-left absolute left-0 bottom-4 rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500 sm:hidden"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default AddHotel;
