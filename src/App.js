import React, { useEffect } from 'react';
import { InfoGrid } from './features/infoGrid/infoGrid';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux'
import { getInfoGridData } from './action/infoGrid.action'
import LoadingOverlay from 'react-loading-overlay';


function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    getGridData()
  }, []);

  const getGridData = () => {
    dispatch(getInfoGridData())
  }

  return (
    <div className="App">
      <LoadingOverlay
        active={loading}
        spinner
        text=''
        className="loader"
      >
        <header>
          <h3>Data Management</h3>
          <button type="button" onClick={() => { getGridData() }} >Refresh</button>
        </header>
        <InfoGrid />
      </LoadingOverlay>

    </div>
  );
}

export default App;
