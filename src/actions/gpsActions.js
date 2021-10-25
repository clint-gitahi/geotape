export const Save_Measurements = 'Save_Measurements';
export const Delete_Measurement = 'Delete_Measurement';
export const Edit_Measurement = 'Edit_Measurement';

const guidGenerator = () => {
  var S4 = function(){
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
};

export const saveMeasurements = (measurementTxt, usersPoints) => {
  return {
    type: Save_Measurements,
    data: {
      measurementId: guidGenerator(),
      measurementTxt,
      usersPoints,
    },
  };
};

export const deleteMeasurement = itemId => {
  return {
    type: Delete_Measurement,
    data: {
      itemId,
    },
  };
};

export const editMeasurements = (itemId, measurementTxt, usersPoints) => {
  return {
    type: Edit_Measurement,
    data: {
      itemId,
      measurementTxt,
      usersPoints,
    },
  };
};
