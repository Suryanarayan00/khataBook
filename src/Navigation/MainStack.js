import React, { Fragment } from 'react';
import navigationStrings from '../constant/navigationStrings';
import BottomTabNavigator from './BottomTabNavigator';
import LeftDrawer from './Drawer';

export default function (Stack) {
    return (
        <Fragment>
            <Stack.Screen name={navigationStrings.DRAWER} component={LeftDrawer} options={{ headerShown: false }} />
        </Fragment>
    )
}