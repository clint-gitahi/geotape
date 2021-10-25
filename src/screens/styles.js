import {StyleSheet} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: '1%',
    backgroundColor: colors.green,
  },
  startText: {
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  saveButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: '1%',
    backgroundColor: colors.green,
  },
  saveText: {
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  gpsPoints: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
