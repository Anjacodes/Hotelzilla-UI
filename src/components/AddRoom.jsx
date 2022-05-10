import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllRoomsAsync } from '../redux/room/room';

const AddRoom = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredImage, setEnteredImage] = useState(null);
  const [enteredCapacity, setEnteredCapacity] = useState(0);
  const [enteredPrice, setEnteredPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const capacityChangeHandler = (event) => {
    setEnteredCapacity(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.files[0]);
  };

  const token = useSelector((state) => state.login.token);

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', enteredName);
    formData.append('description', enteredDescription);
    formData.append('price', enteredPrice);
    formData.append('capacity', enteredCapacity);
    formData.append('image', enteredImage);

    fetch('https://hotelzilla-api.herokuapp.com/api/rooms', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then(() => {
        dispatch(getAllRoomsAsync());
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
          value={enteredCapacity}
          onChange={capacityChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="number"
          value={enteredPrice}
          onChange={priceChangeHandler}
          autoComplete="off"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
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

export default AddRoom;
