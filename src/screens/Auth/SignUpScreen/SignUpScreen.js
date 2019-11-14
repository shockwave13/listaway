import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

import HeaderDefault from '../../../components/HeaderDefault';
import GradientText from '../../../components/GradientText';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';

import {globalStyles, fonts, colors} from '../../../constants';

import styles from './styles';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
    };
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  render() {
    const {fullName, email, password, confirmPassword} = this.state;
    return (
      <SafeAreaView style={globalStyles.containerFull}>
        <KeyboardAvoidingView
          style={globalStyles.containerFull}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
          <StatusBar
            translucent={false}
            barStyle="dark-content"
            backgroundColor="white"
          />
          <HeaderDefault />
          <View style={globalStyles.containerBody}>
            <View style={globalStyles.block}>
              <GradientText style={globalStyles.headerTitle}>
                Sign Up
              </GradientText>
            </View>
            <View style={globalStyles.block}>
              <InputDefault
                name="fullName"
                value={fullName}
                label="Full name"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="email"
                value={email}
                label="Email"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="password"
                value={password}
                label="Password"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm password"
                onChangeText={this.onChangeState}
              />
            </View>
            <View style={globalStyles.block}>
              <CheckBox
                iconType="material-community"
                checkedIcon="check-circle"
                uncheckedIcon="circle-outline"
                checkedColor={colors.LIGHT_GREEN}
                checked={this.state.agree}
                title="I have read and agree to your Privacy Policy and Terms of Use"
                textStyle={{fontFamily: fonts.notoRegular, fontWeight: '300'}}
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                onPress={() => this.onChangeState('agree', !this.state.agree)}
              />
            </View>
            <View style={globalStyles.block}>
              <LinearButton
                title="SIGN UP"
                onPress={() => this.props.navigation.navigate('CreateAccount')}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
