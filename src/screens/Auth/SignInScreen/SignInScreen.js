import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

import {colors} from '../../../constants';

import styles from './styles';
import HeaderDefault from '../../../components/HeaderDefault';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />
        <HeaderDefault />
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 72}}
          locations={[0, 1]}
          colors={[colors.LIGHT_GREEN, colors.LIGHT_BLUE]}
          start={{x: 0, y: 0}}
          useViewFrame={false}
          end={{x: 1, y: 0}}>
          <Text>SOLO</Text>
        </LinearTextGradient>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
