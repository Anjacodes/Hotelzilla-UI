import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHotels, resetDeleteStatus } from '../../redux/hotel/hotel';
import { deleteHotel } from '../../redux/hotel/hotel-helper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmDelete from './ConfirmDelete';
import BackButton from '../navigation/BackButton';

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
    <>
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
      <section className="flex h-screen">
        <div className="flex flex-col items-center gap-3 p-9">
          <img className="w-4/12" src="Hotelzilla-logo.png" alt="" />
          <h2 className="text-2xl capitalize">Delete hotel</h2>
          <table className="h-[40vh] overflow-y-auto overscroll-contain">
            <thead className="font-Taxicab uppercase">
              <tr>
                <th className="">Item</th>
                <th className="">Hotel name</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody className="h-[40vh] ">
              {hotels.map((hotel, index) => (
                <tr key={index} className="even:bg-white">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{hotel.name}</td>
                  <td className="py-3 px-6">
                    <button className="" onClick={() => handleClick(hotel)}>
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
        </div>
      </section>
      <BackButton />
    </>
  );
};

export default RemoveHotel;
