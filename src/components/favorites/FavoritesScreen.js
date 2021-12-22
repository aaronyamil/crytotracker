import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Storage from '../../libs/storage';
import colors from '../../res/colors';
import {CoinItem} from '../coins/CoinItem';
import {FavoriteEmptyState} from './FavoriteEmptyState';

export default class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };

  getFavorite = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();

      const keys = allKeys.filter(key => key.includes('favorite-'));

      const favs = await Storage.instance.multiGet(keys);

      const favorites = favs.map(fav => JSON.parse(fav[1]));

      this.setState({favorites});
    } catch (error) {
      console.log('get favorites error', error);
    }
  };
  componentDidMount() {
    this.getFavorite();
    this.props.navigation.addListener('focus', this.getFavorite);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavorite);
  }
  render() {
    const {favorites} = this.state;
    return (
      <View style={styles.container}>
        {favorites.length == 0 ? <FavoriteEmptyState /> : null}

        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={({item}) => <CoinItem item={item} />}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
});
