import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(101,174,114)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inpContainerStyle: {
    marginVertical: 5,
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    height: 50,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
  },
  btnContainerStyle: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btnStyle: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  btnTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});
