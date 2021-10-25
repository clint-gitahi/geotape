import * as React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';

function MainScreen({navigation}) {
  const {allMeasurements} = useSelector(state => state.userMeasurements);

  const renderMeasurements = ({item}) => {
    return (
      <View>
        <Text>{item.measurementId}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allMeasurements}
        keyExtractor={measurement => measurement.measurementId}
        renderItem={renderMeasurements}
        ListEmptyComponent={() => (
          <Text>
            You have no Measurements, Click "Start new Measurement" to begin
          </Text>
        )}
      />

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('newMeasurements')}>
        <Text style={styles.startText}>Start New Measurement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;
