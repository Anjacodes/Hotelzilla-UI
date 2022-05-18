/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { it, describe, expect } from 'vitest';
import store from '../redux/configStore';
import Home from '../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
