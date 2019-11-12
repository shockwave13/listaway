import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Button, Input} from 'react-native-elements';

import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SafeAreaView style={styles.container}>
          <View style={{width: '100%'}}>
            <Input
              placeholder="Enter your username"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Enter your password"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={() => this.props.navigation.navigate('ResetEmail')}>
              <Text style={styles.forgotText}>
                Forgot username or password?
              </Text>
            </TouchableOpacity>
            <Button
              title="Sign in"
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainerStyle}
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
              title="Sign up"
              titleStyle={[styles.btnTitle, {color: 'white'}]}
              buttonStyle={[styles.btnStyle, {backgroundColor: 'black'}]}
              containerStyle={styles.btnContainerStyle}
              onPress={() => this.props.navigation.navigate('SignUp')}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
