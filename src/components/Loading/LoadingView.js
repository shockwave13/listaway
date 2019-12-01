import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StatusBar} from 'react-native';

import {colors} from '../../constants';

import styles from './styles';

class LoadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />
        <View
          style={{
            backgroundColor: 'rgba(235,235,235,0.6)',
            padding: 30,
            borderRadius: 20,
          }}>
          <ActivityIndicator size="large" color={colors.LIGHT_GREEN} />
          <Text style={{color: 'silver', fontWeight: '700', marginTop: 10}}>
            {this.props.loadingText}
          </Text>
        </View>
      </View>
    );
  }
}

export default LoadingView;
