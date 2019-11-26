import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import ImagePicker from 'react-native-image-picker';

import GradientText from '../../components/GradientText';
import InputDefault from '../../components/InputDefault';
import {LinearButton} from '../../components/Buttons';
import ModalDelete from './ModalDelete';

import {globalStyles, fonts, colors} from '../../constants';
//import {updateProfile} from '../../services/api';

import {
  getProfile,
  onChangeProfileInfo,
  updateProfile,
} from '../../actions/profileActions';

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
      isEditMode: false,
      isEditModePassword: false,
      modalDeleteVisible: false,
      password: '',
      confirm_password: '',
      avatarSource: null,
    };
  }

  onChangeState = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handlePressEdit = () => {
    this.setState({
      isEditMode: true,
    });
  };

  handlePressSave = () => {
    const {onUpdateProfile} = this.props;

    this.setState({
      isEditMode: false,
    });

    onUpdateProfile(this.props.profile);
  };

  handlePressEditPassword = () => {
    this.setState({
      isEditModePassword: true,
    });
  };

  handlePressSavePassword = () => {
    this.setState({
      isEditModePassword: false,
    });
  };

  handlePressDelete = () => {
    this.setState({
      modalDeleteVisible: true,
    });
  };

  handlePressChangeImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        //path: 'images',
      },
    };

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
          avatarSource: response,
        });
        console.log(response);
      }
    });
  };

  componentDidMount() {
    const {getProfileDetail, userId} = this.props;

    getProfileDetail(1);
  }

  render() {
    const {
      isEditMode,
      isEditModePassword,
      password,
      confirm_password,
      modalDeleteVisible,
    } = this.state;

    const {profile, loading, onChangeProfile} = this.props;

    const fullUrlImage =
      'https://pacific-atoll-30835.herokuapp.com' + profile.image;

    if (loading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    } else
      return (
        <SafeAreaView style={globalStyles.containerFull}>
          <View style={{alignItems: 'flex-start', marginLeft: 15}}>
            <Icon
              name="menu"
              type="material-community"
              color="silver"
              size={32}
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
          </View>
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
                        uri: fullUrlImage,
                      }}
                      style={{flex: 1, width: null, height: null}}
                      resizeMode="cover"
                    />
                  </View>
                  <Icon
                    disabled={!isEditMode}
                    name="pencil"
                    type="material-community"
                    color="white"
                    size={20}
                    disabledStyle={{backgroundColor: 'silver'}}
                    containerStyle={
                      isEditMode
                        ? styles.containerPen
                        : styles.containerPenDisable
                    }
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
                    editable={isEditMode}
                    name="family_name"
                    value={profile.family_name}
                    label="Full name"
                    onChangeText={onChangeProfile}
                  />
                  <InputDefault
                    editable={isEditMode}
                    name="direct_tel"
                    value={profile.direct_tel}
                    label="Direct Tel"
                    onChangeText={onChangeProfile}
                  />
                  <InputDefault
                    editable={isEditMode}
                    name="title"
                    value={profile.title}
                    label="Title"
                    onChangeText={onChangeProfile}
                  />
                  <InputDefault
                    editable={isEditMode}
                    name="website"
                    value={profile.website}
                    label="Website"
                    onChangeText={onChangeProfile}
                  />
                  <InputDefault
                    editable={isEditMode}
                    name="brokerage_name"
                    value={profile.brokerage_name}
                    label="Job Title"
                    onChangeText={onChangeProfile}
                  />
                  <InputDefault
                    editable={isEditMode}
                    name="office_tel"
                    value={profile.office_tel}
                    label="Office Tel"
                    onChangeText={onChangeProfile}
                  />
                </View>
                <View style={globalStyles.block}>
                  {isEditMode ? (
                    <LinearButton title="SAVE" onPress={this.handlePressSave} />
                  ) : (
                    <Button
                      title="Edit account"
                      titleStyle={styles.btnTitleDelete}
                      buttonStyle={[
                        styles.btnStyleDelete,
                        {backgroundColor: colors.FACEBOOK},
                      ]}
                      onPress={this.handlePressEdit}
                    />
                  )}
                </View>
              </View>
              <View style={styles.changePasswordBlock}>
                <View style={globalStyles.block}>
                  <GradientText style={globalStyles.headerTitle}>
                    Change password
                  </GradientText>
                </View>
                <View style={globalStyles.block}>
                  <InputDefault
                    editable={isEditModePassword}
                    name="password"
                    value={password}
                    label="New password"
                    onChangeText={this.onChangeState}
                  />
                  <InputDefault
                    editable={isEditModePassword}
                    name="confirm_password"
                    value={confirm_password}
                    label="Confirm password"
                    onChangeText={this.onChangeState}
                  />
                </View>
                <View style={globalStyles.block}>
                  {isEditModePassword ? (
                    <LinearButton
                      title="SAVE"
                      onPress={this.handlePressSavePassword}
                    />
                  ) : (
                    <View>
                      <Button
                        title="Change password"
                        titleStyle={styles.btnTitleDelete}
                        buttonStyle={[
                          styles.btnStyleDelete,
                          {backgroundColor: colors.FACEBOOK},
                        ]}
                        onPress={this.handlePressEditPassword}
                      />
                    </View>
                  )}
                </View>
              </View>
              <View style={styles.deleteProfile}>
                <View style={globalStyles.block}>
                  <Button
                    title="Delete account"
                    titleStyle={styles.btnTitleDelete}
                    buttonStyle={styles.btnStyleDelete}
                    containerStyle={styles.btnContainerDelete}
                    onPress={this.handlePressDelete}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <ModalDelete
            visible={modalDeleteVisible}
            onPressYes={() => this.setState({modalDeleteVisible: false})}
            onPressNo={() => this.setState({modalDeleteVisible: false})}
          />
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </SafeAreaView>
      );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.users.userId,
    profile: state.profile.profile,
    loading: state.profile.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileDetail: id => {
      dispatch(getProfile(id));
    },
    onChangeProfile: (name, value) => {
      dispatch(onChangeProfileInfo(name, value));
    },
    onUpdateProfile: profile => {
      dispatch(updateProfile(profile));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
