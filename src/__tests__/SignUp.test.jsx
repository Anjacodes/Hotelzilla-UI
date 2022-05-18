/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { it, describe, expect } from 'vitest';
import store from '../redux/configStore';
import SignUp from '../components/SignUp';

describe('Sign Up', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
