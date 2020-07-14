import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter} from "react-router-dom";
import Login from './login.jsx';

const store = createStore(() => ({
  USER: {
    user: {
      id: 1,
      email: `mail@email.com`,
      avatarUrl: `/static/avatar/8.jpg`,
      isPro: false,
      name: `Angelina`,
    }
  }
}));

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login onSubmit={() => {}} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});