import React, { Fragment } from 'react';
import navigationStrings from '../constant/navigationStrings';
import BottomTabNavigator from './BottomTabNavigator';

export default function(Stack){
    return(
        <Fragment>
            <Stack.Screen name={navigationStrings.MAIN} component={BottomTabNavigator} options={{headerShown: false}}/>
        </Fragment>
    )
}