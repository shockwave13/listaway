import React, {Component} from 'react';
import {View, Text, BackHandler} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.openDrawer();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;
