import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../pages/HomeScreen';
import LinksScreen from '../pages/LinksScreen';
import SettingsScreen from '../pages/SettingsScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Links: {
            screen: LinksScreen
        },
        Settings: {
            screen: SettingsScreen
        },
    }, 
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);