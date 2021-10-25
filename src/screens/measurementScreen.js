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
  const [usersPoints, setUserPoints] = React.useState({
    pointA: {},
    pointB: {},
  });

  const permissionHandle = async userPoint => {
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
      setUserPoints({
        ...usersPoints,
        [userPoint]: location,
      });
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      setUserPoints({
        ...usersPoints,
        [userPoint]: location,
      });
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
          {Object.keys(usersPoints.pointA).length === 0 ? (
            <Text>Record GPS Location</Text>
          ) : (
            <Text>
              {usersPoints.pointA.latitude}, {usersPoints.pointA.longitude}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.gpsPoints}>
        <Text>Point B</Text>
        <TouchableOpacity onPress={() => permissionHandle('pointB')}>
          {Object.keys(usersPoints.pointB).length === 0 ? (
            <Text>Record GPS Location</Text>
          ) : (
            <Text>
              {usersPoints.pointB.latitude}, {usersPoints.pointB.longitude}
            </Text>
          )}
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
