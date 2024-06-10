import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AccountScreen from '../modules/AccountScreen';
import DeviceScreen from '../modules/DeviceScreen';
import HomeScreen from '../modules/HomeScreen';
import colors from '../themes/colors';
import Metrics from '../themes/metrics';
import {moderateScale, verticalScale} from '../themes/scale';
import {ICONS} from '../assets';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DeviceStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const DeviceStackScreen = () => {
  return (
    <DeviceStack.Navigator>
      <DeviceStack.Screen
        name="DeviceScreen"
        component={DeviceScreen}
        options={{headerShown: false}}
      />
    </DeviceStack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};

const TabIcon = (Icon, isFocus, title) => (
  <View style={styles.tabIconView}>
    <Image
      source={Icon}
      style={[
        styles.tabIcon,
        {tintColor: isFocus ? colors.primary : colors.grey},
      ]}
    />
    <Text
      style={[styles.tabText, {color: isFocus ? colors.primary : colors.grey}]}>
      {title}
    </Text>
    {isFocus && <View style={styles.activeDot} />}
  </View>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => TabIcon(ICONS.home, focused, 'Home'),
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Device"
          component={DeviceStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => TabIcon(ICONS.device, focused, 'Device'),
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => TabIcon(ICONS.user, focused, 'Account'),
            tabBarStyle: styles.tabBarStyle,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabIcon: {
    height: moderateScale(30),
    width: moderateScale(30),
    resizeMode: 'contain',
  },
  tabBarStyle: {
    height: verticalScale(65),
    width: Metrics.screenWidth,
  },
  tabText: {
    fontSize: 10,
    fontWeight: '700',
    marginVertical: verticalScale(4),
  },
  tabIconView: {
    height: verticalScale(50),
    alignItems: 'center',
  },
  activeDot: {
    backgroundColor: colors.primary,
    height: moderateScale(6),
    width: moderateScale(6),
    borderRadius: moderateScale(3),
  },
});
export default AppNavigation;
