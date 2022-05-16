import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHotels, resetDeleteStatus } from '../../redux/hotel/hotel';
import { deleteHotel } from '../../redux/hotel/hotel-helper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmDelete from './ConfirmDelete';

const RemoveHotel = () => {
  const dispatch = useDispatch();
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);
  const { all: hotels, deleteStatus } = useSelector((state) => state.hotel);
  const { token } = useSelector((state) => state.login);

  // *Modal controlers
  const handleClick = (hotelName) => {
    setmodalVisible(true);
    setModalInfo(hotelName);
  };
  const handleOk = () => {
    dispatch(deleteHotel({ id: modalInfo.id, token }));
    setmodalVisible(false);
    setModalInfo({});
  };
  const handleCancel = () => {
    setmodalVisible(false);
    setModalInfo({});
  };

  if (deleteStatus === 'fulfilled' || deleteStatus === 'rejected') {
    setTimeout(() => {
      dispatch(resetDeleteStatus());
    }, 3000);
  }

  useEffect(() => {
    return () => {
      dispatch(resetDeleteStatus());
    };
  }, []);

  return (
    <section className="flex w-full flex-col items-center">
      {deleteStatus === 'fulfilled' && (
        <div className="absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700">
          Hotel successfully deleted!
        </div>
      )}
      {deleteStatus === 'rejected' && (
        <div className="absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700">
          Ups! Something went wrong
        </div>
      )}
      <header>
        <h2 className="mt-10 mb-10 font-Taxicab text-3xl text-gray-800 md:mt-[25vh]">
          Delete Hotel
        </h2>
      </header>
      <table className="mx-auto w-4/5 text-gray-500 md:table-auto">
        <thead className="bg-gray-500 font-Taxicab text-lg uppercase text-slate-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 text-left">Item</th>
            <th className="w-96 py-3 px-6 text-left">Hotel name</th>
            <th className="py-3 px-6 ">Action</th>
          </tr>
        </thead>
        <tbody className="font-Metrophobic">
          {hotels.map((hotel, index) => (
            <tr key={index} className="even:bg-white">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 text-neutral-900">{hotel.name}</td>
              <td className="flex items-center justify-center py-4">
                <button
                  className="rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-200 hover:text-red-800"
                  onClick={() => handleClick(hotel)}
                >
                  <DeleteForeverIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmDelete
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        hotel={modalInfo}
      />
    </section>
  );
};

export default RemoveHotel;
