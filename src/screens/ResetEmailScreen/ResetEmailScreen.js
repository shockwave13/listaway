import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button, Input} from 'react-native-elements';

import styles from './styles';

class ResetEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{width: '100%'}}>
          <Input
            placeholder="Enter your email"
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inpContainerStyle}
          />
          <Button
            title="Sign in"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainerStyle}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ResetEmailScreen;
