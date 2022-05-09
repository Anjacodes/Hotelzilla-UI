import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchDetails from '../../redux/details/apiCall';
import ReservationModal from './ReservationModal';

function DetailsView() {
  const [modalVisible, setModalVisible] = useState(false);
  let params = useParams();
  const roomId = params.roomId;

  const dispatch = useDispatch();
  const room = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchDetails(roomId));
  }, [dispatch]);

  // Modal controllers
  const openModal = () => {
    setModalVisible(true);
  };
  const handleOk = () => {
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <section className="flex mx-[5vw] my-[25vh] justify-between w-[80vw]">
      <img
        className="w-[40vw] mr-4"
        src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
        alt="placeholder"
      />
      <div className="flex flex-col items-end">
        <h2 className="mb-3 font-bold text-2xl">{room.name}</h2>
        <p className="text-right mb-10">{room.description.slice(0, 50)}</p>
        <table>
          <tbody className="text-right">
            <tr>
              <td className="text-left">Capacity:</td>
              <td>2</td>
            </tr>
            <tr>
              <td className="text-left">Price:</td>
              <td>${room.price}</td>
            </tr>
            <tr>
              <td className="text-left">Hotel:</td>
              <td>{room.hotel} Hotel</td>
            </tr>
          </tbody>
        </table>
        <button
          className="mt-auto py-3 px-8 bg-lime-400 rounded-lg"
          onClick={openModal}>
          Reserve
        </button>
        <ReservationModal
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </div>
    </section>
  );
}

export default DetailsView;
