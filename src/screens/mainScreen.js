import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteMeasurement} from '../actions/gpsActions';

import styles from './styles';

function MainScreen({navigation}) {
  const dispatch = useDispatch();
  const {allMeasurements} = useSelector(state => state.userMeasurements);

  const calculateDistance = points => {
    const {longitude1, latitude1} = points.pointA;
    const {longitude2, latitude2} = points.pointB;

    if ((latitude1 == latitude2) && (longitude1 == longitude2)) {
      return 0;
    } else {
      var radlatitude1 = Math.PI * latitude1/180;
      var radlatitude2 = Math.PI * latitude2/180;
      var theta = longitude1-longitude2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlatitude1) * Math.sin(radlatitude2) + Math.cos(radlatitude1) * Math.cos(radlatitude2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist;
    }
  };

  const handleDelete = itemId => {
    dispatch(deleteMeasurement(itemId));
  };

  const renderMeasurements = ({item}) => {
    return (
      <View style={styles.listMeasure}>
        <Text style={styles.measurementTxt}>{item.measurementTxt}</Text>
        <Text style={styles.distance}>
          {calculateDistance(item.usersPoints)}
        </Text>
        <TouchableOpacity
          style={styles.deleteEditBtns}
          onPress={() => handleDelete(item.measurementId)}>
          <Text style={styles.startText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteEditBtns}
          onPress={() => navigation.navigate('editMeasurement', {item})}>
          <Text style={styles.startText}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 8}}>
        <FlatList
          data={allMeasurements}
          keyExtractor={measurement => measurement.measurementId}
          renderItem={renderMeasurements}
          ListEmptyComponent={() => (
            <Text style={styles.beginTxt}>
              You have no Measurements, Click "Start new Measurement" to begin
            </Text>
          )}
        />
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('newMeasurements')}>
          <Text style={styles.startText}>Start New Measurement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;
