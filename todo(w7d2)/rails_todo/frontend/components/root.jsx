import React from 'react';
import { Provider } from 'react-redux';
import { App } from './app';
import configureStore from '../store/store';

const Root = ({ store }) => (
  <Provider store={ store }>
    <div>
      <App />
    </div>
  </Provider>
);

export default Root;
