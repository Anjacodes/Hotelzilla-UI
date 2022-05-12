import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postHotelAsync } from '../redux/hotel/hotel-helper';
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
    rating: 0,
    city: '',
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

    const formData = new FormData();
    formData.append('name', newHotel.name);
    formData.append('description', newHotel.description);
    formData.append('rating', newHotel.rating);
    formData.append('image', newHotel.image);
    formData.append('city_id', newHotel.city);

    await postHotelAsync(token, formData);

    navigate('/', { replace: true });
  };

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
        <img
          className="self-center w-4/12 w-sm-6/12"
          src="Hotelzilla-logo.png"
          alt=""
        />
        <input
          type="text"
          name="name"
          value={newHotel.name}
          onChange={onChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          name="description"
          value={newHotel.description}
          onChange={onChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple={false}
          onChange={onChangeHandler}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="number"
          name="rating"
          value={newHotel.rating}
          onChange={onChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <select
          type="number"
          name="city"
          onChange={onChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {cities.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="bg-lime-400 text-white py-2 appearance-none border rounded px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddHotel;
