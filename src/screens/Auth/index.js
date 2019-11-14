import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {colors, fonts, images} from '../../constants';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        colors={[colors.LIGHT_GREEN, colors.LIGHT_BLUE]}
        style={styles.containerFull}>
        <SafeAreaView style={styles.container}>
          <View style={styles.containerLogo}>
            <Image
              source={images.logo}
              style={{height: 200, width: 200}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerFull}>
            <Button
              title="Sign In"
              titleStyle={styles.btnTitleWhite}
              buttonStyle={styles.btnStyleWhite}
              containerStyle={styles.btnContainerStyle}
              onPress={() => this.props.navigation.navigate('SignIn')}
            />
            <Button
              title="Sign Up"
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainerStyle}
            />
            <Button
              icon={{
                name: 'logo-facebook',
                type: 'ionicon',
                color: 'white',
                size: 32,
                containerStyle: {marginHorizontal: 10},
              }}
              title="Continue with Facebook"
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btnStyleFacebook}
              containerStyle={styles.btnContainerStyle}
            />
            <Button
              icon={{
                name: 'logo-google',
                type: 'ionicon',
                color: colors.LIGHT_BLUE,
                containerStyle: {marginHorizontal: 10},
              }}
              title="Continue with Google"
              titleStyle={styles.btnTitleWhite}
              buttonStyle={styles.btnStyleWhite}
              containerStyle={styles.btnContainerStyle}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainerStyle: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  btnTitleWhite: {
    fontSize: 20,
    color: colors.LIGHT_BLUE,
    fontFamily: fonts.notoBold,
  },
  btnStyleWhite: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
  },
  btnTitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: fonts.notoBold,
  },
  btnStyle: {
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnStyleFacebook: {
    backgroundColor: colors.FACEBOOK,
    height: 50,
    borderRadius: 5,
  },
});

export default Auth;
