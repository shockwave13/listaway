import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.openDrawer();
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
