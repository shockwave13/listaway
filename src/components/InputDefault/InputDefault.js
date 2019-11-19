import React, {Component} from 'react';
import {Input} from 'react-native-elements';

import {fonts, colors} from '../../constants';

import styles from './styles';

class InputDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: 'silver',
    };
  }

  onChangeColor = newColor => {
    this.setState({
      activeColor: newColor,
    });
  };

  render() {
    const {activeColor} = this.state;
    return (
      <Input
        autoCapitalize={'none'}
        rightIcon={{
          name: 'check-circle',
          type: 'materila-community',
          color: activeColor,
        }}
        label={this.props.label}
        labelStyle={[styles.label, {color: activeColor}]}
        inputContainerStyle={{borderColor: activeColor, height: 40}}
        keyboardType={this.props.keyboardType}
        containerStyle={styles.container}
        onFocus={() => this.onChangeColor(colors.LIGHT_BLUE)}
        onBlur={() => this.onChangeColor('silver')}
        onChangeText={text => this.props.onChangeText(this.props.name, text)}
        secureTextEntry={this.props.secureTextEntry}
      />
    );
  }
}

export default InputDefault;
