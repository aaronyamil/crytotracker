import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import colors from '../../res/colors';

export const CoinItem = ({item, onPress}) => {
  getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nametext}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image style={styles.arrow} source={getImageArrow()} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nametext: {
    color: colors.white,
    fontSize: 14,
    marginRight: 12,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    marginRight: 8
  },
  priceText: {
    color: colors.white,
    fontSize: 14,
  },
  arrow: {
    width: 22,
    height: 22,
  },
});
