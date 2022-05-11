import React from 'react';
import PropTypes from 'prop-types';

const hostURL = 'http://localhost:3000';

function HotelItem({ hotel }) {
  return (
    <div className="flex flex-col items-center gap-1 border-2 rounded-lg">
      <img
        className="w-8/12 self-center"
        src={`${hostURL}${hotel.image.url}`}
        alt={hotel.name}
      />
      <div className="flex flex-col gap-3 items-center">
        <div>{hotel.name}</div>
        <div className="text-center">{hotel.description}</div>
      </div>
    </div>
  );
}

HotelItem.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HotelItem;
