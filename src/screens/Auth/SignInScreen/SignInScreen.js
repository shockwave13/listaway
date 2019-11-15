import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Button} from 'react-native-elements';

import HeaderDefault from '../../../components/HeaderDefault';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';
import GradientText from '../../../components/GradientText';

import {LoginButton, AccessToken} from 'react-native-fbsdk';

import {globalStyles, colors} from '../../../constants';
import styles from './styles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.containerFull}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />
        <HeaderDefault />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View styles={styles.block}>
              <GradientText style={globalStyles.headerTitle}>
                Sign In
              </GradientText>
              <View style={{marginVertical: 5}}>
                <Text style={globalStyles.underHeaderHint}>
                  Login first to continue
                </Text>
              </View>
            </View>
            <View style={styles.block}>
              <InputDefault
                name="email"
                value={this.state.email}
                label="Email"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="password"
                value={this.state.password}
                label="Password"
                onChangeText={this.onChangeState}
              />
              <View style={{alignItems: 'flex-end', marginVertical: 15}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('RestorePassword')
                  }>
                  <Text style={styles.hint}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 5}}>
              <LinearButton
                title="LOGIN"
                onPress={() => this.props.navigation.navigate('Home')}
              />

              <View style={{marginTop: 20}}>
                <LoginButton
                  onLoginFinished={(error, result) => {
                    if (error) {
                      console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.');
                    } else {
                      AccessToken.getCurrentAccessToken().then(data => {
                        console.log(data.accessToken.toString());
                      });
                      this.props.navigation.navigate('Home');
                    }
                  }}
                  onLogoutFinished={() => console.log('logout.')}
                />

                <Button
                  icon={{
                    name: 'logo-google',
                    type: 'ionicon',
                    color: colors.LIGHT_BLUE,
                    containerStyle: {marginHorizontal: 10},
                  }}
                  title="Continue with Google"
                  titleStyle={styles.btnTitleWhite}
                  buttonStyle={styles.btnStyle}
                  containerStyle={styles.btnContainerStyle}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
