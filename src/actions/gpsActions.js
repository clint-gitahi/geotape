import {v4 as uuidv4} from 'uuid';

export const Save_Measurements = 'Save_Measurements';

export const saveMeasurements = (measurementTxt, usersPoints) => {
  console.log(measurementTxt, usersPoints);
  return {
    type: Save_Measurements,
    data: {
      measurementId: uuidv4(),
      measurementTxt,
      usersPoints,
    },
  };
};
