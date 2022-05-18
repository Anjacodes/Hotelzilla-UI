/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { it, describe, expect } from 'vitest';
import store from '../../redux/configStore';
import ConfirmDelete from '../../components/removeHotel/ConfirmDelete';

describe('Confirm Delete', () => {
  const hotel = {
    description: 'Test',
    id: 77,
    image: null,
    name: 'Test',
    rating: 3,
    city: { id: 1, name: 'Argentina' },
  };
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ConfirmDelete hotel={hotel} />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
