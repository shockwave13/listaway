import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';

import HeaderDefault from '../../../components/HeaderDefault';
import GradientText from '../../../components/GradientText';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';

import {globalStyles, fonts, colors} from '../../../constants';
import {updateProfile} from '../../../services/api';

import styles from './styles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family_name: '',
      title: '',
      directTel: '',
      website: '',
      brokerageName: '',
      officeTel: '',
    };
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handlePressSave = async () => {
    const {
      family_name,
      title,
      directTel,
      website,
      brokerageName,
      officeTel,
    } = this.state;

    if (family_name.length <= 0 && directTel.length <= 0) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Error',
        'Please enter family name and direct tel',
      );
    } else {
      const response = await updateProfile(
        1,
        family_name,
        title,
        directTel,
        website,
        brokerageName,
        officeTel,
      );
      if (response.status === 200) {
        this.props.navigation.navigate('Home');
      }
    }
  };

  render() {
    const {
      title,
      directTel,
      website,
      brokerageName,
      officeTel,
      family_name,
    } = this.state;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
        <SafeAreaView style={globalStyles.containerFull}>
          <HeaderDefault />
          <StatusBar
            translucent={false}
            barStyle="dark-content"
            backgroundColor="white"
          />
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <View style={[globalStyles.block, {alignItems: 'center'}]}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: colors.UNDER,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="ios-person"
                  type="ionicon"
                  color="white"
                  size={48}
                />
              </View>
            </View>
            <View style={globalStyles.block}>
              <GradientText style={globalStyles.headerTitle}>
                Create Accout
              </GradientText>
            </View>

            <View style={globalStyles.block}>
              <InputDefault
                name="family_name"
                value={family_name}
                label="Full name"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="directTel"
                value={directTel}
                label="Direct Tel"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="title"
                value={title}
                label="Title"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="website"
                value={website}
                label="Website"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="brokerageName"
                value={brokerageName}
                label="Job Title"
                onChangeText={this.onChangeState}
              />
              <InputDefault
                name="officeTel"
                value={officeTel}
                label="Office Tel"
                onChangeText={this.onChangeState}
              />
            </View>

            <View style={globalStyles.block}>
              <LinearButton title="SAVE" onPress={this.handlePressSave} />
            </View>
          </View>
        </SafeAreaView>
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.users.userId,
  };
};

export default connect(mapStateToProps, null)(ProfileScreen);
