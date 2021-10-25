import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/mainScreen';
import NewMeasurements from '../screens/measurementScreen';

const Stack = createStackNavigator();

function AppScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mainscreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="newMeasurements"
        component={NewMeasurements}
        options={{headerTitle: false, headerBackTitle: false}}
      />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return <AppScreens />;
};

export default AppNavigator;
