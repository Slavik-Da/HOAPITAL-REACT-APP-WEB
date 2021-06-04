import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './components/Routes/Routes';
import { store } from './redux/store';
import './assets/scss/main.scss';

export const App = () => {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>
  )
}
