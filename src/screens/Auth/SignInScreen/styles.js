import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../../constants';

export default StyleSheet.create({
  containerFull: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  hint: {
    color: colors.UNDER,
    fontSize: 16,
    fontFamily: fonts.notoRegular,
  },
  block: {
    marginTop: 20,
  },
});
