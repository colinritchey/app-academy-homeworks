// import React from 'react';
// import ReactDOM from 'react-dom';
// import configureStore from './store/store';
//
// import Root from './components/root';
//
// document.addEventListener('DOMContentLoaded', () => {
//   const preloadedState = localStorage.state ?
//     JSON.parse(localStorage.state) : {};
//   const store = configureStore(preloadedState);
//
//   const root = document.getElementById('content');
//   ReactDOM.render(<Root store={store} />, root);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { applyMiddleware } from 'redux';


import Root from './components/root';

const addLoggingToDispatch = store => next => action => {
  let storeDispatch = store.dispatch;

  console.log(store.getState());
  console.log(action, "action");
  storeDispatch(action);
  console.log(store.getState());

};

const applyMiddlewares = (store, ...middleWares) => {
  let dispatch = store.dispatch;
  middleWares.forEach((middleWare) => {
    dispatch = middleWare(store)(dispatch);
  });

  return Object.assign({}, store, { dispatch });
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const newStore = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={newStore} />, root);
});
