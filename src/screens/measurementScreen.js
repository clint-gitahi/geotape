import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import RNLocation from 'react-native-location';
import {useDispatch} from 'react-redux';
import {saveMeasurements} from '../actions/gpsActions';

import colors from '../colors';
import styles from './styles';

RNLocation.configure({
  distanceFilter: 1,
  desiredAccuracy: {
    ios: 'best',
    android: 'balancedPowerAccuracy',
  },
});

function NewMeasurements({navigation}) {
  const [measurementTxt, setMeasurementTxt] = React.useState('');
  const [usersPoints, setUserPoints] = React.useState({
    pointA: {},
    pointB: {},
  });

  const dispatch = useDispatch();

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

  const handleSave = () => {
    if (
      Object.keys(usersPoints.pointB).length === 0 ||
      Object.keys(usersPoints.pointA).length === 0 ||
      measurementTxt === ''
    ) {
      return;
    }
    dispatch(saveMeasurements(measurementTxt, usersPoints));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>New Measurement</Text>

      <View style={{flexDirection: 'row', marginTop: '15%', justifyContent: 'space-between'}}>
        <Text style={styles.txtHdrs}>Name</Text>
        <TextInput
          placeholder="Add measurement description"
          placeholderTextColor={colors.greenLight}
          autoCorrect={false}
          autoCompleteType="off"
          onChangeText={text => setMeasurementTxt(text)}
          value={measurementTxt}
          style={styles.descTxtInput}
        />
      </View>

      <View style={styles.gpsPoints}>
        <Text style={styles.txtHdrs}>Point A</Text>
        <TouchableOpacity onPress={() => permissionHandle('pointA')}>
          {Object.keys(usersPoints.pointA).length === 0 ? (
            <Text style={styles.txtValues}>Record GPS Location</Text>
          ) : (
            <Text style={styles.txtValues}>
              {usersPoints.pointA.latitude}, {usersPoints.pointA.longitude}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.gpsPoints}>
        <Text style={styles.txtHdrs}>Point B</Text>
        <TouchableOpacity onPress={() => permissionHandle('pointB')}>
          {Object.keys(usersPoints.pointB).length === 0 ? (
            <Text style={styles.txtValues}>Record GPS Location</Text>
          ) : (
            <Text style={styles.txtValues}>
              {usersPoints.pointB.latitude}, {usersPoints.pointB.longitude}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={
          Object.keys(usersPoints.pointB).length === 0 ||
          Object.keys(usersPoints.pointA).length === 0 ||
          measurementTxt === ''
            ? [styles.saveButton, {backgroundColor: colors.greenLight}]
            : styles.saveButton
        }
        onPress={() => handleSave()}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default NewMeasurements;
