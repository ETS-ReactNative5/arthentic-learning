import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import ArtistScreen from './screens/ArtistScreen';
import AvoidingScamsScreen from './screens/AvoidingScamsScreen';
import BlockchainScreen from './screens/BlockchainScreen';
import BurnoutScreen from './screens/BurnoutScreen';
import CollectorScreen from './screens/CollectorScreen';
import CryptoBasicsScreen from './screens/CryptoBasicsScreen';
import CryptocurrencyScreen from './screens/CryptocurrencyScreen';
import DAOsScreen from './screens/DAOsScreen';
import DappsScreen from './screens/DappsScreen';
import DefiScreen from './screens/DefiScreen';
import EconomicsBasicsScreen from './screens/EconomicsBasicsScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HomeScreen from './screens/HomeScreen';
import InvestorScreen from './screens/InvestorScreen';
import MetaverseScreen from './screens/MetaverseScreen';
import NFTsScreen from './screens/NFTsScreen';
import TaxesScreen from './screens/TaxesScreen';
import WalletOldScreen from './screens/WalletOldScreen';
import WalletsScreen_CZIN2fUW from './screens/WalletsScreen_CZIN2fUW';
import Web1Screen from './screens/Web1Screen';
import Web2Screen from './screens/Web2Screen';
import Web30Screen from './screens/Web30Screen';
import Web3Screen from './screens/Web3Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="HomeScreen"
        screenOptions={{
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="CryptoBasicsScreen"
          component={CryptoBasicsScreen}
          options={{ title: 'Crypto Basics' }}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{ title: 'Feedback' }}
        />
        <Stack.Screen
          name="ArtistScreen"
          component={ArtistScreen}
          options={{ title: 'Artist' }}
        />
        <Stack.Screen
          name="CollectorScreen"
          component={CollectorScreen}
          options={{ title: 'Collector' }}
        />
        <Stack.Screen
          name="InvestorScreen"
          component={InvestorScreen}
          options={{ title: 'Investor' }}
        />
        <Stack.Screen
          name="EconomicsBasicsScreen"
          component={EconomicsBasicsScreen}
          options={{ title: 'Economics Basics' }}
        />
        <Stack.Screen
          name="Web30Screen"
          component={Web30Screen}
          options={{ title: 'Web 3.0' }}
        />
        <Stack.Screen
          name="BlockchainScreen"
          component={BlockchainScreen}
          options={{ title: 'Blockchain' }}
        />
        <Stack.Screen
          name="WalletOldScreen"
          component={WalletOldScreen}
          options={{ title: 'Wallet_Old' }}
        />
        <Stack.Screen
          name="DAOsScreen"
          component={DAOsScreen}
          options={{ title: 'DAOs' }}
        />
        <Stack.Screen
          name="AvoidingScamsScreen"
          component={AvoidingScamsScreen}
          options={{ title: 'Avoiding Scams' }}
        />
        <Stack.Screen
          name="MetaverseScreen"
          component={MetaverseScreen}
          options={{ title: 'Metaverse' }}
        />
        <Stack.Screen
          name="NFTsScreen"
          component={NFTsScreen}
          options={{ title: 'NFTs' }}
        />
        <Stack.Screen
          name="DappsScreen"
          component={DappsScreen}
          options={{ title: 'Dapps' }}
        />
        <Stack.Screen
          name="BurnoutScreen"
          component={BurnoutScreen}
          options={{ title: 'Burnout' }}
        />
        <Stack.Screen
          name="CryptocurrencyScreen"
          component={CryptocurrencyScreen}
          options={{ title: 'Cryptocurrency' }}
        />
        <Stack.Screen
          name="DefiScreen"
          component={DefiScreen}
          options={{ title: 'Defi' }}
        />
        <Stack.Screen
          name="TaxesScreen"
          component={TaxesScreen}
          options={{ title: 'Taxes' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Web1Screen"
          component={Web1Screen}
          options={{ title: 'Web1' }}
        />
        <Stack.Screen
          name="Web2Screen"
          component={Web2Screen}
          options={{ title: 'Web2' }}
        />
        <Stack.Screen
          name="Web3Screen"
          component={Web3Screen}
          options={{ title: 'Web3' }}
        />
        <Stack.Screen
          name="WalletsScreen_CZIN2fUW"
          component={WalletsScreen_CZIN2fUW}
          options={{ title: 'Wallets' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
