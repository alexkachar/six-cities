import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Login from './login.jsx';
import mockStore from '../../test-data/mock-store.js';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Login
              onLogin={() => {}}
              loading={false}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
