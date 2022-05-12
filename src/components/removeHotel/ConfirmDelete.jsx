import React from 'react';
import PropTypes from 'prop-types';

const ConfirmDelete = ({ visible, onOk, onCancel, hotel }) => {
  const handleVisible = () => {
    if (visible) return 'block ';
    else return 'hidden ';
  };

  return (
    <div
      className={
        handleVisible() + 'bg-black/20 absolute top-0 left-0 w-screen h-screen'
      }>
      <section className="bg-slate-50 mt-[10%] mx-[10%] xl:mx-[25%] flex flex-col relative ">
        <h3 className="font-Taxicab text-xl border-b-2 px-4 py-2">
          Please confirm:
        </h3>
        <i
          class="fa-solid fa-xmark absolute top-2 right-4 text-xl hover:text-red-600"
          onClick={onCancel}></i>

        <p className="px-6 py-4 text-black text-lg">
          Are you sure you want to delete {hotel.name}?
        </p>

        <div className="flex gap-4 py-4 justify-end mt-6 px-4 border-t-2">
          <button
            className="px-4 py-2 rounded-md text-white hover:bg-green-300 hover:text-green-800 font-semibold bg-green-600"
            type="button"
            onClick={onOk}>
            Sure
          </button>
          <button
            className="px-4 py-2 rounded-md text-white hover:bg-red-300 hover:text-red-800 font-semibold bg-red-600"
            type="button"
            onClick={onCancel}>
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

ConfirmDelete.propTypes = {};

export default ConfirmDelete;
