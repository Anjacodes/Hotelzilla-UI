import React from 'react';
import PropTypes from 'prop-types';

function RoomItem({ room }) {
  return (
    <div className="flex flex-col items-center gap-1 border-2 rounded-lg">
      <img className="w-8/12 self-center" src={room.image} alt={room.name} />
      <div className="flex flex-col gap-3 items-center">
        <div>{room.name}</div>
        <div className="text-center">{room.description}</div>
      </div>
    </div>
  );
}

RoomItem.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RoomItem;
