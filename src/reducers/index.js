import {combineReducers} from 'redux';
import {
  Save_Measurements,
  Delete_Measurement,
  Edit_Measurement,
} from '../actions/gpsActions';

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
    case Edit_Measurement:
      return {
        ...state,
        allMeasurements: state.allMeasurements.map(measurement => {
          if (measurement.measurementId !== action.data.itemId) {
            return measurement;
          }
          return {
            ...measurement,
            measurementId: action.data.itemId,
            measurementTxt: action.data.measurementTxt,
            usersPoints: action.data.usersPoints,
          };
        }),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userMeasurements: measurementsReducer,
});

export default rootReducer;
