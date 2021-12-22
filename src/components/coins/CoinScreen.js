import {config} from 'npm';
import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import http from '../../libs/http';
import colors from '../../res/colors';
import {CoinItem} from './CoinItem';
import CoinSearch from './CoinSearch';

export default class CoinScreen extends Component {
  state = {
    coins: [],
    allCoins: [],
    loading: false,
  };

  handlePress = coin => {
    console.log('entro', coin);
    this.props.navigation.navigate('CoinsDetail', {coin});
  };

  componentDidMount = () => {
    this.getCoins();
  };

  getCoins = async () => {
    this.setState({loading: true});
    const res = await http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    this.setState({coins: res.data, allCoins: res.data, loading: false});
  };

  handleSearch = query => {
    const {allCoins} = this.state;

    const coinsFiltered = allCoins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    this.setState({coins: coinsFiltered});
  };

  render() {
    const {coins, loading} = this.state;

    return (
      <View style={styles.container}>
        <CoinSearch onChange={this.handleSearch} />
        {loading ? (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  boton: {
    backgroundColor: '#CD5C5C',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  loader: {
    marginTop: 60,
  },
});
