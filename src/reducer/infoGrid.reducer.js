import filter from 'lodash/filter';
import includes from 'lodash/includes';

const INTIAL_STATE = {
    loading: false,
    infoGridData : []
}

const InfoGridReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_INFO_GRID_DATA_REQUEST':
            return { ...state, loading: true };
        case 'GET_INFO_GRID_DATA_SUCCESS':
            return { ...state, infoGridData: action.payload, loading: false }
        case 'UPDATE_INFO_GRID_DATA':{
            const remainingGridRow = filter(state.infoGridData,(rowData)=>{
                return !includes(action.payload,rowData.id)
            })
            return { ...state, infoGridData: remainingGridRow }  
        }  
        default:
            return state;
    }
};
export default InfoGridReducer;