import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from './CoinScreen';
import colors from '../../res/colors';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';

const Stack = createStackNavigator();

export const CoinStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinScreen} />
      <Stack.Screen name="CoinsDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};
