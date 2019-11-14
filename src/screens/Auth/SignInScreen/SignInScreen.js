import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';

import HeaderDefault from '../../../components/HeaderDefault';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';
import GradientText from '../../../components/GradientText';

import {globalStyles} from '../../../constants';
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
