import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHotels, resetDeleteStatus } from '../../redux/hotel/hotel';
import { deleteHotel } from '../../redux/hotel/hotel-helper';
import ConfirmDelete from './ConfirmDelete';

const RemoveHotel = () => {
  const dispatch = useDispatch();
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);
  const { all: hotels, deleteStatus } = useSelector((state) => state.hotel);

  // *Modal controlers
  const handleClick = (hotelName) => {
    setmodalVisible(true);
    setModalInfo(hotelName);
  };
  const handleOk = () => {
    dispatch(deleteHotel(modalInfo.id));
    setmodalVisible(false);
    setModalInfo({});
  };
  const handleCancel = () => {
    setmodalVisible(false);
    setModalInfo({});
  };

  if (deleteStatus === 'fulfilled') {
    setTimeout(() => {
      dispatch(resetDeleteStatus());
    }, 3000);
  }
  return (
    <section>
      {deleteStatus === 'fulfilled' && <div>Hotel successfully deleted</div>}
      <header>
        <h2>Delete Hotel</h2>
      </header>
      <table>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hotel.name}</td>
              <td>
                <button onClick={() => handleClick(hotel)}>
                  Delete button
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
