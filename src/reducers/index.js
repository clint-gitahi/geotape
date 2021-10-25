import {combineReducers} from 'redux';
import {Save_Measurements} from '../actions/gpsActions';

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
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userMeasurements: measurementsReducer,
});

export default rootReducer;
