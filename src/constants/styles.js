import {StyleSheet} from 'react-native';
import fonts from './fonts';

const globalStyles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 42,
    fontFamily: fonts.notoBold,
  },
  underHeaderHint: {
    color: 'silver',
    fontSize: 18,
    fontFamily: fonts.notoRegular,
  },
});

export default globalStyles;
