import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/mainScreen';
import NewMeasurements from '../screens/measurementScreen';

const Stack = createStackNavigator();

function AppScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainscreen" component={MainScreen} />
      <Stack.Screen name="newMeasurements" component={NewMeasurements} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return <AppScreens />;
};

export default AppNavigator;
