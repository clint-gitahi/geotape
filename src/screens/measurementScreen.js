import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import colors from '../colors';
import styles from './styles';

function NewMeasurements() {
  const [measurementTxt, setMeasurementTxt] = React.useState('');

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
        <TouchableOpacity onPress={() => console.log("getting locations")}>
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
