import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllHotels } from '../redux/hotel/hotel';

const AddHotel = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredImage, setEnteredImage] = useState(null);
  const [enteredRating, setEnteredRating] = useState(0);
  const [enteredOption, setEnteredOption] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    setEnteredRating(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.files[0]);
  };

  const cityChangeHandler = (event) => {
    setEnteredOption(event.target.value);
  };

  const token = useSelector((state) => state.login.token);
  const cities = useSelector((state) => state.city.all);

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', enteredName);
    formData.append('description', enteredDescription);
    formData.append('rating', enteredRating);
    formData.append('image', enteredImage);
    formData.append('city_id', enteredOption);

    fetch('https://hotelzilla-api.herokuapp.com/api/hotels', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then(() => {
        dispatch(getAllHotels());
        navigate('/', { replace: true });
      })
      .catch((error) => console.log(error));
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
          value={enteredName}
          onChange={nameChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={imageChangeHandler}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="number"
          value={enteredRating}
          onChange={ratingChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <select
          type="number"
          onChange={cityChangeHandler}
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
