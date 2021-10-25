import {combineReducers} from 'redux';
import {Save_Measurements, Delete_Measurement} from '../actions/gpsActions';

const initialState = {
  allMeasurements: [],
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Save_Measurements:
      return {
        ...state,
        allMeasurements: [...state.allMeasurements, action.data],
      };
    case Delete_Measurement:
      return {
        ...state,
        allMeasurements: state.allMeasurements.filter(
          item => item.measurementId !== action.data.itemId,
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userMeasurements: measurementsReducer,
});

export default rootReducer;
