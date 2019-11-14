import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Button, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

import HeaderDefault from '../../../components/HeaderDefault';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';

import {colors, fonts, globalStyles} from '../../../constants';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

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
              <LinearTextGradient
                style={globalStyles.headerTitle}
                locations={[0, 1]}
                colors={[colors.LIGHT_GREEN, colors.LIGHT_BLUE]}
                start={{x: 0, y: 0}}
                useViewFrame={false}
                end={{x: 1, y: 0}}>
                <Text>Sign In</Text>
              </LinearTextGradient>
              <View style={{marginVertical: 5}}>
                <Text style={globalStyles.underHeaderHint}>
                  Login first to continue
                </Text>
              </View>
            </View>
            <View style={styles.block}>
              <InputDefault label="Email" onChangeText={this.onChangeState} />
              <InputDefault
                label="Password"
                onChangeText={this.onChangeState}
              />
              <View style={{alignItems: 'flex-end', marginVertical: 15}}>
                <Text style={styles.hint}>Forgot password?</Text>
              </View>
            </View>
            <View style={styles.block}>
              <LinearButton title="Login" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
