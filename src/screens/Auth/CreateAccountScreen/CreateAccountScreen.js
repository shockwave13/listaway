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

class CreateAccoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      directTel: '',
      website: '',
      brokerageName: '',
      officeTel: false,
    };
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  render() {
    const {title, directTel, website, brokerageName, officeTel} = this.state;
    return (
      <SafeAreaView style={globalStyles.containerFull}>
        <KeyboardAvoidingView
          style={globalStyles.containerFull}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
          <HeaderDefault />
          <StatusBar
            translucent={false}
            barStyle="dark-content"
            backgroundColor="white"
          />
          <View style={globalStyles.containerBody}>
            <View style={globalStyles.block}>
              <GradientText style={globalStyles.headerTitle}>
                Create Accout
              </GradientText>
            </View>
            <View style={globalStyles.block}>
              <InputDefault
                name="title"
                value={title}
                label="Title"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="directTel"
                value={directTel}
                label="Direct Tel"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="website"
                value={website}
                label="Website"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="brokerageName"
                value={brokerageName}
                label="Brokerage Name"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                secureTextEntry
                name="officeTel"
                value={officeTel}
                label="Office Tel"
                onChangeText={this.onChangeState}
              />
            </View>

            <View style={globalStyles.block}>
              <LinearButton title="SAVE" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default CreateAccoutScreen;
