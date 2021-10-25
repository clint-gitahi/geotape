import {StyleSheet, Platform} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2%',
  },
  beginTxt: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '60%',
  },
  startButton: {
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor: colors.green,
  },
  startText: {
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  saveButton: {
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor: colors.green,
    position: 'absolute',
    bottom: '5%',
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
    marginTop: '10%',
  },
  listMeasure: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: '5%',
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '15%',
  },
  descTxtInput: {
    borderRadius: 5,
    ...Platform.select({
      ios: {
        borderWidth: 2,
        borderColor: colors.green,
        width: '70%',
        padding: 10,
      },
    }),
  },
  txtValues: {fontSize: 14, alignSelf: 'center'},
  txtHdrs: {fontSize: 19, alignSelf: 'center'},
  measurementTxt: {
    fontSize: 17,
    flex: 3,
    alignSelf: 'center',
  },
  distance: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
  },
  deleteEditBtns: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.green,
    margin: 3,
  },
});

export default styles;
