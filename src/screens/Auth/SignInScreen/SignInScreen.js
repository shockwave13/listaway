import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import HeaderDefault from '../../../components/HeaderDefault';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';
import GradientText from '../../../components/GradientText';

import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {globalStyles} from '../../../constants';
import styles from './styles';

import {connect} from 'react-redux';
import {setAuthKey} from '../../../actions/usersActions';

import {
  LoginWithEmailAndPassword,
  LoginWithFacebook,
  LoginWithGoogle,
} from '../../../services/api';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      key: '',
    };
  }

  componentDidMount() {
    if (this.props.users.authStatus) {
      this.props.navigation.navigate('Home');
    }
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '125486066869-cinc09kfjdqognn9ce57d65ojr2iiau7.apps.googleusercontent.com',
    });
  }

  componentDidUpdate() {
    if (this.props.users.authStatus) {
      this.props.navigation.navigate('Home');
    }
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handlePressLoginGoogle = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      await GoogleSignin.signIn();
      const response = await GoogleSignin.getTokens();
      const key = await loginWithGoogle(response.accessToken);

      this.props.setAuth('google', key.key);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  handlePressLogin = async () => {
    const {email, password} = this.state;
    const response = await loginWithEmailAndPassword(email, password);

    console.log(response);
    if (
      response.password === undefined &&
      response.non_field_errors === undefined
    ) {
      this.props.setAuth('email', response.key);
    }
  };

  handlePressLoginFacebook = async tokenFB => {
    const key = await loginWithFacebook(tokenFB).then(response => response.key);

    this.props.setAuth('facebook', key);
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
              <LinearButton title="LOGIN" onPress={this.handlePressLogin} />

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <LoginButton
                  onLoginFinished={(error, result) => {
                    if (error) {
                      console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.');
                    } else {
                      AccessToken.getCurrentAccessToken().then(data => {
                        this.handlePressLoginFacebook(data.accessToken);
                      });
                    }
                  }}
                  onLogoutFinished={() => console.log('logout.')}
                />

                <GoogleSigninButton
                  style={{flex: 1}}
                  color={GoogleSigninButton.Color.Light}
                  onPress={this.handlePressLoginGoogle}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuth: (type, key) => {
      dispatch(setAuthKey(type, key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
