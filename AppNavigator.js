import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import ArtistScreen from './screens/ArtistScreen';
import AvoidingScamsScreen from './screens/AvoidingScamsScreen';
import BlockchainScreen from './screens/BlockchainScreen';
import CollectorScreen from './screens/CollectorScreen';
import DAOsScreen from './screens/DAOsScreen';
import EconomicsBasicsScreen from './screens/EconomicsBasicsScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import InvestorScreen from './screens/InvestorScreen';
import UniversalScreen from './screens/UniversalScreen';
import WalletsScreen from './screens/WalletsScreen';
import Web30Screen from './screens/Web30Screen';

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
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="UniversalScreen"
      tabBarOptions={{
        showLabel: true,
        labelPosition: 'below-icon',
        activeTintColor: theme.colors.background,
        inactiveTintColor: theme.colors.surface,
        activeBackgroundColor: theme.colors.medium,
        inactiveBackgroundColor: theme.colors.background,
        style: {
          backgroundColor: theme.colors.lightInverse,
          borderTopColor: theme.colors.lightInverse,
        },
      }}
    >
      <Tab.Screen
        name="UniversalScreen"
        component={UniversalScreen}
        options={{
          title: 'Universal',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/library-sharp"
              size={25}
              color={focused ? theme.colors.background : theme.colors.surface}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CollectorScreen"
        component={CollectorScreen}
        options={{
          title: 'Collector',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/group"
              size={25}
              color={focused ? theme.colors.background : theme.colors.surface}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InvestorScreen"
        component={InvestorScreen}
        options={{
          title: 'Investor',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/money"
              size={25}
              color={focused ? theme.colors.background : theme.colors.surface}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{
          title: 'Artist',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/paint-brush"
              size={25}
              color={focused ? theme.colors.background : theme.colors.surface}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{ title: 'Feedback' }}
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
          name="WalletsScreen"
          component={WalletsScreen}
          options={{ title: 'Wallets' }}
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
          name="BottomTabNavigator"
          component={BottomTabNavigator}
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
