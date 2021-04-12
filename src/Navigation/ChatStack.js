import React, {Fragment} from 'react';
import navigationStrings from '../constant/navigationStrings';
import {Chat, OneToOneChatScreen} from '../Screen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator initialRouteName={navigationStrings.MAIN_CHAT}>
      <Stack.Screen
        name={navigationStrings.CHAT}
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CONVERSATION}
        component={OneToOneChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
