import React from 'react';
import RoomItem from './RoomItem';
import { useSelector } from 'react-redux';

function Index() {
  const rooms = [
    {
      id: 1,
      name: 'Room 1',
      image: 'http://via.placeholder.com/640x360',
      description: 'This is room1 description',
    },
    {
      id: 2,
      name: 'Room 2',
      image: 'http://via.placeholder.com/640x360',
      description: 'This is room2 description',
    },
    {
      id: 3,
      name: 'Room 3',
      image: 'http://via.placeholder.com/640x360',
      description: 'This is room3 description',
    },
    {
      id: 4,
      name: 'Room 4',
      image: 'http://via.placeholder.com/640x360',
      description: 'This is room4 description',
    },
  ];

  const role = useSelector((state) => state.login.role);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-end p-5">
          {role === 'Admin' && (
            <button className="bg-lime-400 px-3 py-2 text-white">
              Add Room
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-6 p-5">
          {rooms.map((room) => (
            <RoomItem key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
