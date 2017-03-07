import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
// import createLogger from 'redux-logger';
//
// const logger = createLogger();

const addLoggingToDispatch = store => next => action => {
  let storeDispatch = store.dispatch;

  console.log(store.getState());
  console.log(action, "action");
  storeDispatch(action);
  console.log(storeDispatch(action));
  console.log(store.getState());
  return next(action);
};

const logger = store => next => action => {

  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
};

// const logger = createLogger();

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer,
    preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};



export default configureStore;
