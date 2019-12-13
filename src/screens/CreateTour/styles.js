import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../constants';
import {fonts} from '../../constants';

export default StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: Platform.OS === 'ios' ? 40 : 30,
    paddingBottom: 10,
    backgroundColor: colors.LIGHT_BLUE,
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  inputStyle: {
    fontFamily: fonts.notoRegular,
    paddingHorizontal: 10,
  },
  btnContainerStyle: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  btnTitleWhite: {
    fontSize: 16,
    color: colors.LIGHT_BLUE,
    fontFamily: fonts.notoBold,
  },
  btnStyleWhite: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
  },
  label: {
    color: colors.LIGHT_BLUE,
    fontFamily: fonts.notoRegular,
    fontSize: 18,
  },
});
