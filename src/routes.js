import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Feed from './pages/Feed';

import logo from './assets/instagram.png';

export default createAppContainer(
    createStackNavigator({
        Feed,
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitle:() => <Image source={logo} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
            },
        },
    }),
);