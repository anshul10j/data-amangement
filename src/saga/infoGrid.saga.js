import { put, takeLatest, all } from 'redux-saga/effects';

function* getInfoGridData() {
  const infoGridData = yield fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
  yield all([
    put({ type: "SET_INFO_GRID_DATA", payload: infoGridData }),
    put({ type: "GET_INFO_GRID_DATA_SUCCESS", payload: infoGridData }),
  ]);
}

export default function* rootSaga() {
  yield all([
    takeLatest('GET_INFO_GRID_DATA_REQUEST', getInfoGridData)
  ]);
}