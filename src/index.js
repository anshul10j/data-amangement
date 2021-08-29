import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import InfoGridReducer from './reducer/infoGrid.reducer';
import App from './App';
import rootSaga from './saga/infoGrid.saga';

import './index.scss'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  InfoGridReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
if (module.hot) { module.hot.accept(App); }



