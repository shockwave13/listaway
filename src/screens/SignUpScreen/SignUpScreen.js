import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Input, Divider, Button} from 'react-native-elements';

import styles from './styles';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Broker',
      showCategory: false,
    };
  }

  handlePressChangeCategory = () => {
    this.setState({
      showCategory: !this.state.showCategory,
    });
  };

  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <View style={styles.roundView}></View>
          </View>
          <View style={{marginTop: 10}}>
            <Input
              placeholder="Enter your name"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Enter your family name"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              leftIcon={{
                name: 'chevron-down',
                type: 'material-community',
                onPress: this.handlePressChangeCategory,
              }}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
              value={this.state.activeCategory}
            />
            {this.state.showCategory ? (
              <FlatList
                data={['Broker', 'Sales Representative', 'Owner', 'Other']}
                renderItem={item => (
                  <TouchableOpacity
                    style={styles.elementContainer}
                    onPress={() => this.setState({activeCategory: item.item})}>
                    <Text>{item.item}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <Divider />}
                keyExtractor={item => item.item}
              />
            ) : null}
          </View>
          <View style={{marginTop: 10}}>
            <Input
              placeholder="Enter direct phone"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Enter email"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Enter web site"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Enter brokerage name"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
            <Input
              placeholder="Office phone"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inpContainerStyle}
            />
          </View>
          <View style={styles.socialContainer}>
            <View style={styles.facebook}>
              <Text style={{color: 'white'}}>Sign up with Facebook</Text>
            </View>
            <View style={styles.instagram}>
              <Text style={{color: 'white'}}>Sign up with Instagram</Text>
            </View>
          </View>
          <Button
            title="Sign up"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainerStyle}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default SignUpScreen;
