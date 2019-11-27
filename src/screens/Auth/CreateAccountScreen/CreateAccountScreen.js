import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import ImagePicker from 'react-native-image-picker';

import GradientText from '../../../components/GradientText';
import InputDefault from '../../../components/InputDefault';
import {LinearButton} from '../../../components/Buttons';

import {globalStyles, fonts, colors} from '../../../constants';

import {DEFAULT_URL} from '../../../config/server';

import {
  getProfile,
  onChangeProfileInfo,
  updateProfile,
  updateAvatar,
} from '../../../actions/profileActions';

import styles from './styles';

class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const {getProfileDetail} = this.props;

    const token = await AsyncStorage.getItem('token', null);

    getProfileDetail(token);
  }

  componentDidUpdate() {
    const {success} = this.props;

    if (success) {
      this.props.navigation.navigate('Home');
    }
  }

  handlePressSave = async () => {
    const {onUpdateProfile} = this.props;

    const token = await AsyncStorage.getItem('token', null);
    onUpdateProfile(this.props.profile, token);
  };

  handlePressChangeImage = async () => {
    const {onUpdateAvatar} = this.props;

    const token = await AsyncStorage.getItem('token', null);

    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        //path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        onUpdateAvatar(response, token);
      }
    });
  };

  render() {
    const {profile, onChangeProfile} = this.props;

    return (
      <SafeAreaView style={globalStyles.containerFull}>
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor="white"
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <View style={[globalStyles.block, {alignItems: 'center'}]}>
              <View>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: `${DEFAULT_URL}${profile.avatar}`,
                    }}
                    style={{flex: 1, width: null, height: null}}
                    resizeMode="cover"
                  />
                </View>
                <Icon
                  name="pencil"
                  type="material-community"
                  color="white"
                  size={20}
                  disabledStyle={{backgroundColor: 'silver'}}
                  containerStyle={styles.containerPen}
                  underlayColor="transparent"
                  onPress={this.handlePressChangeImage}
                />
              </View>
            </View>
            <View style={styles.profileBlock}>
              <View style={globalStyles.block}>
                <GradientText style={globalStyles.headerTitle}>
                  Profile
                </GradientText>
              </View>
              <View style={globalStyles.block}>
                <InputDefault
                  name="full_name"
                  value={profile.full_name}
                  label="Full name"
                  onChangeText={onChangeProfile}
                />
                <InputDefault
                  name="direct_tel"
                  value={profile.direct_tel}
                  label="Direct Tel"
                  onChangeText={onChangeProfile}
                />
                <InputDefault
                  name="title"
                  value={profile.title}
                  label="Title"
                  onChangeText={onChangeProfile}
                />
                <InputDefault
                  name="website"
                  value={profile.website}
                  label="Website"
                  onChangeText={onChangeProfile}
                />
                <InputDefault
                  name="job_title"
                  value={profile.job_title}
                  label="Job Title"
                  onChangeText={onChangeProfile}
                />
                <InputDefault
                  name="office_tel"
                  value={profile.office_tel}
                  label="Office Tel"
                  onChangeText={onChangeProfile}
                />
              </View>
              <View style={globalStyles.block}>
                <LinearButton title="SAVE" onPress={this.handlePressSave} />
              </View>
            </View>
          </View>
        </ScrollView>

        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.profile.error,
    profile: state.profile.profile,
    loading: state.profile.loading,
    success: state.profile.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeProfile: (name, value) => {
      dispatch(onChangeProfileInfo(name, value));
    },
    getProfileDetail: token => {
      dispatch(getProfile(token));
    },
    onUpdateProfile: (profile, token, create = true) => {
      dispatch(updateProfile(profile, token, create));
    },
    onUpdateAvatar: (profile, token) => {
      dispatch(updateAvatar(profile, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccountScreen);
