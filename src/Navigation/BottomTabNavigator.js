import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Credit, CustomerFeedback, Debit, Home } from '../Screen';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import navigationStrings from '../constant/navigationStrings';
import ImageIcon from '../Component/ImageIcon';
import imagePath from '../constant/imagePath';


const Tab = createMaterialBottomTabNavigator();


export default function () {
    return (
        <Tab.Navigator
            initialRouteName={navigationStrings.HOME}
            activeColor={colors.themeColor}
            inactiveColor={colors.darkGrey}
            fontWeight={fontFamily.semiBold}
            barStyle={{ backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.lightGreyBg }}
        >


            <Tab.Screen name={navigationStrings.HOME} component={Home}
                options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' color={color} size={26} />) }}
            />

            <Tab.Screen name={navigationStrings.CREDIT} component={Credit}
                options={{
                    tabBarLabel: 'Credit',
                    tabBarIcon: ({ color }) => (
                        <ImageIcon source={imagePath.wallet} size={27} tintColor={color}/>
                    ),
                }} />

            <Tab.Screen name={navigationStrings.DEBIT} component={Debit}
                options={{
                    tabBarLabel: 'Debit',
                    tabBarIcon: ({ color }) => (
                        <ImageIcon source={imagePath.wallet} size={27} tintColor={color}/>
                    ),
                }} />

            <Tab.Screen name={navigationStrings.CUSTOMER_FEEDBACK} component={CustomerFeedback}
                options={{
                    tabBarLabel: 'Feedback',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }} />

        </Tab.Navigator>
    )
}