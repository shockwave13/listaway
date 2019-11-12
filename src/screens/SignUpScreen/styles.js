import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(101,174,114)',
  },
  roundView: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'silver',
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
  elementContainer: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    height: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
  socialContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  facebook: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgb(72,104,173)',
    borderRadius: 20,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagram: {
    marginLeft: 5,
    flex: 1,
    height: 40,
    backgroundColor: 'rgb(186,72,165)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
