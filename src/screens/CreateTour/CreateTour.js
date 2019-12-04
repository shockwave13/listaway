import React, {Component} from 'react';
import {
  View,
  Platform,
  StatusBar,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

import GradientText from '../../components/GradientText';

import {globalStyles, colors} from '../../constants';
import styles from './styles';

class CreateTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      songList: null,
      showRightMenu: false,
      imageSource: null,
    };
  }

  handlePressAdd = () =>
    this.setState({
      showRightMenu: !this.state.showRightMenu,
    });

  handlePressPickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // Open Image Library:
    ImagePicker.launchImageLibrary(options, response => {
      const {photoList} = this.state;

      const newPhotoList = photoList.concat({uri: response.uri});
      this.setState({
        photoList: newPhotoList,
      });
    });
  };

  handlePressCamera = () => {
    const options = {
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Launch Camera:
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const {photoList} = this.state;

        const newPhotoList = photoList.concat({uri: response.uri});
        this.setState({
          photoList: newPhotoList,
        });
      }
    });
  };

  handlePressSong = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={globalStyles.containerFull}
        nestedScrollEnabled>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Icon
            name="menu"
            type="material-community"
            color="white"
            size={32}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
        </View>
        <View style={styles.containerBody}>
          <View>
            <GradientText style={globalStyles.headerTitle}>
              Create Tour
            </GradientText>
            <Input
              leftIcon={{name: 'ios-search', type: 'ionicon', color: 'silver'}}
              placeholder="Address"
              inputStyle={styles.inputStyle}
              containerStyle={{paddingHorizontal: 0}}
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'space-between', marginTop: 20}}>
            <View style={styles.photoBlock}>
              <Text style={styles.label}>Photos:</Text>
              <View>
                <FlatList
                  nestedScrollEnabled
                  alwaysBounceHorizontal
                  data={this.state.photoList}
                  numColumns={2}
                  renderItem={({item}) => (
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Image
                        source={item}
                        style={{
                          width: (Dimensions.get('window').width - 60) / 2,
                          height: 100,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.musicBlock}>
              <Text style={styles.label}>Songs:</Text>
              <View style={{height: 200}}></View>
            </View>
          </View>
          <View>
            <Button
              title="Preview Tour"
              titleStyle={styles.btnTitleWhite}
              buttonStyle={styles.btnStyleWhite}
              containerStyle={styles.btnContainerStyle}
            />
            <Button
              title="Order Tour"
              titleStyle={styles.btnTitleWhite}
              buttonStyle={styles.btnStyleWhite}
              containerStyle={styles.btnContainerStyle}
            />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 40,
            right: 10,
          }}>
          <Icon
            reverse
            name="ios-add"
            type="ionicon"
            color={colors.LIGHT_GREEN}
            size={24}
            onPress={this.handlePressAdd}
          />
          {this.state.showRightMenu ? (
            <View>
              <Icon
                reverse
                name="ios-images"
                type="ionicon"
                color={colors.LIGHT_GREEN}
                size={24}
                onPress={this.handlePressPickImage}
              />
              <Icon
                reverse
                name="ios-camera"
                type="ionicon"
                color={colors.LIGHT_GREEN}
                size={24}
                onPress={this.handlePressCamera}
              />
              <Icon
                reverse
                name="ios-musical-notes"
                type="ionicon"
                color={colors.LIGHT_GREEN}
                size={24}
                onPress={this.handlePressSong}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

export default CreateTour;
