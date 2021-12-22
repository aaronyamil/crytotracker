import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../res/colors';

export const FavoriteEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have favorite yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
