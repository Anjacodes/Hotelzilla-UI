import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import handleImage from '../../modules/handleImage';
import printStars from '../../modules/printStars';
import { fetchDetails } from '../../redux/details/detailsSlice';
import ReservationModal from './ReservationModal';

function DetailsView() {
  let navigateTo = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  let params = useParams();
  const roomId = params.roomId;

  const dispatch = useDispatch();
  const {roomDetails, loading} = useSelector((state) => state.details);

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

  if (loading) return <p className='font-Taxicab text-2xl mt-[15%] ml-[35%] text-gray-600'>LOADING...</p>

  if (roomDetails.length !== 0) {
  return (
    <section className="flex ml-[6vw] mr-[5vw] pt-[25vh] pb-[10vh] justify-evenly w-[80vw] overflow-y-hidden">
      <img
        src={handleImage(roomDetails.image)}
        className="ml-6 aspect-{1/1.8} w-[40vw]"
        alt="hotel image"
      />
      <div className="flex flex-col items-end ml-auto">
        <h2 className="mb-3 font-bold text-3xl">{roomDetails.name.toUpperCase()}</h2>
        <p className="text-right mb-10">{roomDetails.description}</p>
        <table>
          <tbody className="text-right">
            <tr>
              <td className="text-left py-1 px-4">Rating:</td>
              <td className="py-1 px-4">{printStars(roomDetails.rating)}</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="text-left py-1 px-4">City:</td>
              <td className="py-1 px-4">{roomDetails.city.name}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="mt-12 py-3 px-4 bg-lime-400 rounded-full text-slate-50 hover:bg-lime-500"
          onClick={openModal}><i className="fa-solid fa-calendar-check mr-2"></i>Reserve<i className="fa-solid fa-circle-chevron-right ml-4"></i>
        </button>
        <ReservationModal
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </div>
      <i className="fixed left-[18vw] top-[85vh] py-4 px-6 bg-lime-400 hover:bg-lime-500 rounded-r-full fa-solid fa-caret-left text-slate-50" onClick={()=> navigateTo("/")}/>
    </section>
  );
}
}

export default DetailsView;
