import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

const Stack = createStackNavigator();




function Routes(props) {
    let {userData} = props

    console.log(userData, '@@@route .js')
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!userData.accessToken ? AuthStack(Stack): MainStack(Stack)}
                {/* {MainStack(Stack)} */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const mapStateToProps = (state) => {
    return {
        userData: state.authReducers.userData,
    }
}

export default connect(mapStateToProps)(Routes)

// export default connect()(Routes);



