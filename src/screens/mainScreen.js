import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        You have no Measurements, Click "Start new Measurement" to begin
      </Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('newMeasurements')}>
        <Text style={styles.startText}>Start New Measurement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;
