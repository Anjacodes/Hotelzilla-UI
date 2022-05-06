import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/details/apiCall';

function DetailsView() {

let params = useParams();
const roomId = params.roomId;

const dispatch = useDispatch();
const room = useSelector(state => state.details)

useEffect(() => {
  dispatch(fetchDetails(roomId))
}, [dispatch])

  return (
    <section className='flex mx-[5vw] my-[25vh] justify-between w-[80vw]'>
        <img className="w-[40vw] mr-4" src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="placeholder"/>
        <div className='flex flex-col items-end'>
          <h2 className="mb-3 font-bold text-2xl">{room.name}</h2>
          <p className='text-right mb-10'>{room.description.slice(0,50)}</p>
          <table>
            <tbody className='text-right'>
              <tr>
                <td className='text-left'>Capacity:</td>
                <td>2</td>
              </tr>
              <tr>
                <td className='text-left'>Price:</td>
                <td>${room.price}</td>
              </tr>
              <tr>
                <td className='text-left'>Hotel:</td>
                <td>{room.hotel} Hotel</td>
              </tr>
            </tbody>
          </table>
          <button className='mt-auto py-3 px-8 bg-lime-400 rounded-lg'>Reserve</button>
        </div>
    </section>
  )
}

export default DetailsView