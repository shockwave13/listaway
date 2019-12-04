import React, {Component} from 'react';
import {View, Platform, StatusBar, Text, ScrollView} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';

import GradientText from '../../components/GradientText';

import {globalStyles, colors} from '../../constants';
import styles from './styles';

class CreateTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: null,
      songList: null,
      showRightMenu: false,
    };
  }

  handlePressAdd = () =>
    this.setState({
      showRightMenu: !this.state.showRightMenu,
    });

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.containerFull}>
        <StatusBar translucent={true} backgroundColor="transparent" />
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
              <View style={{height: 200}}></View>
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
              />
              <Icon
                reverse
                name="ios-musical-notes"
                type="ionicon"
                color={colors.LIGHT_GREEN}
                size={24}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

export default CreateTour;
