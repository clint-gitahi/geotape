import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import RNLocation from 'react-native-location';

import colors from '../colors';
import styles from './styles';

RNLocation.configure({
  distanceFilter: 1,
  desiredAccuracy: {
    ios: 'best',
    android: 'balancedPowerAccuracy',
  },
});

function NewMeasurements() {
  const [measurementTxt, setMeasurementTxt] = React.useState('');
  const [pointA, setPointA] = React.useState({});
  const [pointB, setPointB] = React.useState({});

  const permissionHandle = async (point) => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });

    let location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to measure the distance',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log('LOCATION 1', location);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log('LOCATION 2', location);
    }
  };

  return (
    <View style={styles.container}>
      <Text>New Measurement</Text>

      <TextInput
        placeholder="Add measurement description"
        placeholderTextColor={colors.greenLight}
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={text => setMeasurementTxt(text)}
        value={measurementTxt}
      />

      <View style={styles.gpsPoints}>
        <Text>Point A</Text>
        <TouchableOpacity onPress={() => permissionHandle('pointA')}>
          <Text>Record GPS Location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gpsPoints}>
        <Text>Point B</Text>
        <TouchableOpacity onPress={() => permissionHandle('pointB')}>
          <Text>Record GPS Location</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => console.log(measurementTxt)}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewMeasurements;
