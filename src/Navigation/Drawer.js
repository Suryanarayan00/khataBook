import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constant/navigationStrings';
import BottomTabNavigator from './BottomTabNavigator';
import { BarGraph, Chat, PieChart } from '../Screen';
import colors from '../styles/colors';
import ChatStack from './ChatStack';



export default function LeftDrawer() {
    const Drawer = createDrawerNavigator();

    return (

        <Drawer.Navigator initialRouteName={navigationStrings.MAIN} drawerStyle={{
            backgroundColor: colors.lightGreyBg,
            width: 195,

        }}
        >
            <Drawer.Screen name={navigationStrings.MAIN}
                component={BottomTabNavigator} />
            <Drawer.Screen name={navigationStrings.CHAT}
                component={ChatStack} />
            <Drawer.Screen name={navigationStrings.BAR_GRAPH}
                component={BarGraph} />
            <Drawer.Screen name={navigationStrings.PIE_CHART}
                component={PieChart} />
        </Drawer.Navigator>

    )
}