export const Save_Measurements = 'Save_Measurements';

const guidGenerator = () => {
  var S4 = function(){
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
};

export const saveMeasurements = (measurementTxt, usersPoints) => {
  console.log(measurementTxt, usersPoints);
  return {
    type: Save_Measurements,
    data: {
      measurementId: guidGenerator(),
      measurementTxt,
      usersPoints,
    },
  };
};
