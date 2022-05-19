/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { it, describe, expect } from 'vitest';
import store from '../../redux/configStore';
import ReservationModal from '../../components/Details/ReservationModal';

describe('Reservation Modal', () => {
  it('renders correctly', () => {
    const roomDetails = {
      city: { id: 1, name: 'Argentina' },
    };

    const roomTypes = [
      {
        description:
          'A room assigned to one person. May have one or more beds.',
        id: 1,
        name: 'Single',
        price: 300,
      },
    ];

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ReservationModal hotelInfo={roomDetails} roomTypes={roomTypes} />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
