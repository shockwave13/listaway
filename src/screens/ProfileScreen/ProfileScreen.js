import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, ScrollView, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import ImagePicker from 'react-native-image-picker';

import GradientText from '../../components/GradientText';
import InputDefault from '../../components/InputDefault';
import {LinearButton} from '../../components/Buttons';
import ModalDelete from './ModalDelete';

import {globalStyles, fonts, colors} from '../../constants';
import {updateProfile} from '../../services/api';

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
    this.setState({
      isEditMode: false,
    });
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
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
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
      isEditMode,
      isEditModePassword,
      password,
      confirm_password,
      modalDeleteVisible,
    } = this.state;

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
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: colors.UNDER,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.state.fileData !== null ? (
                  /**
                  <Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + this.state.fileData,
                    }}
                    style={{flex: 1, width: null, height: null}}
                    resizeMode="contain"
                  />
                   */

                  <Image
                    source={{uri: this.state.fileUri}}
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
                  value={family_name}
                  label="Full name"
                  onChangeText={this.onChangeState}
                />
                <InputDefault
                  editable={isEditMode}
                  name="directTel"
                  value={directTel}
                  label="Direct Tel"
                  onChangeText={this.onChangeState}
                />
                <InputDefault
                  editable={isEditMode}
                  name="title"
                  value={title}
                  label="Title"
                  onChangeText={this.onChangeState}
                />
                <InputDefault
                  editable={isEditMode}
                  name="website"
                  value={website}
                  label="Website"
                  onChangeText={this.onChangeState}
                />
                <InputDefault
                  editable={isEditMode}
                  name="brokerageName"
                  value={brokerageName}
                  label="Job Title"
                  onChangeText={this.onChangeState}
                />
                <InputDefault
                  editable={isEditMode}
                  name="officeTel"
                  value={officeTel}
                  label="Office Tel"
                  onChangeText={this.onChangeState}
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
  };
};

export default connect(mapStateToProps, null)(ProfileScreen);
