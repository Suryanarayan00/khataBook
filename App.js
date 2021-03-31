import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { getUserData } from './src/utils/utils';
import { saveUserData } from './src/redux/actions/authActions';




export default class App extends Component{


  componentDidMount=()=>{
    getUserData().then(res=>{
      const userData=res;
      if(userData && !! userData.accessToken){
        saveUserData(userData);
      }
    }).catch(err=> console.log(err))
  }
 

  render(){
    return(
      <SafeAreaProvider>
        <Provider store={store}>
          <Routes/>
        </Provider>
        <FlashMessage position='top'/>
      </SafeAreaProvider>
    )
  }
}