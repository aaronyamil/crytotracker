import React, {Component} from 'react';
import {View, TextInput, Platform, StyleSheet} from 'react-native';
import colors from '../../res/colors';

export default class CoinSearch extends Component {
  state = {
    query: '',
  };

  handleText = query => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };
  render() {
    const query = this.state;
    return (
      <View>
        <TextInput
          onChangeText={this.handleText}
          value={query}
          placeholder="Search Coin"
          placeholderTextColor={colors.white}
          style={[
            styles.textInput,
            Platform.OS == "ios" ? styles.textInputIos : styles.textInputAndroid
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.charade,
    paddingLeft: 16,
    color: colors.white
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  },
});
