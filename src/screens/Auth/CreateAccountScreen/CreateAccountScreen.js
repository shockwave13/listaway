import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, ScrollView, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import ImagePicker from 'react-native-image-picker';

import HeaderDefault from '../../../components/HeaderDefault';
import GradientText from '../../../components/GradientText';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';

import {globalStyles, fonts, colors} from '../../../constants';
import {updateProfile} from '../../../services/api';

import styles from './styles';

class CreateAccoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family_name: '',
      title: '',
      directTel: '',
      website: '',
      brokerageName: '',
      officeTel: '',
      avatarSource: null,
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

  handlePressChangeImage = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
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
                {this.state.avatarSource !== null ? (
                  <Image
                    source={this.state.avatarSource}
                    style={{flex: 1, width: null, height: null}}
                    resizeMode="contain"
                  />
                ) : (
                  <Icon
                    name="ios-person"
                    type="ionicon"
                    color="white"
                    size={48}
                  />
                )}
                <Icon
                  name="pencil"
                  type="material-community"
                  color="white"
                  size={20}
                  containerStyle={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: colors.LIGHT_GREEN,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={this.handlePressChangeImage}
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

export default connect(mapStateToProps, null)(CreateAccoutScreen);
