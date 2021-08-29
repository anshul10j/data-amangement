import React, { useEffect, useState, useRef } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useSelector, useDispatch } from 'react-redux'
import './infoGrid.scss'
import { updateInfoGridData } from '../../action/infoGrid.action'
import reduce from 'lodash/reduce';


export function InfoGrid() {
  const infoGridData = useSelector(state => state.infoGridData)
  const dispatch = useDispatch()
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    setRowData(infoGridData)
  }, [infoGridData]);

  const updateGridData = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedRowsId = reduce(selectedNodes, function(result, node) {
      result.push(node.data.id);
      return result;
    }, []);
    console.log(selectedRowsId)
    dispatch(updateInfoGridData(selectedRowsId))
  }

  return (
    <div className="infoGridContainer">
      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          rowSelection="multiple">
          <AgGridColumn
            field="id"
            headerName='ID'
            width={150}
            checkboxSelection={true}
            headerCheckboxSelection={true} 
            resizable =  {true}
            />
          <AgGridColumn
            width={150}
            field="userId"
            headerName='USER ID'
            resizable =  {true}
          />
          <AgGridColumn
            field="title"
            headerName='TITLE'
            width={400}
            resizable =  {true}
          />
          <AgGridColumn
            width={200}
            field="completed"
            headerName='COMPLETED'
            resizable =  {true}
          />
        </AgGridReact>
      </div>
      <footer>
        <button type="button" onClick={() => { updateGridData() }}>Delete Record</button>
      </footer>
    </div>

  );
}



