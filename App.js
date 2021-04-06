import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { getUserData } from './src/utils/utils';
import { saveUserData } from './src/redux/actions/authActions';
import SplashScreen from 'react-native-splash-screen';
import { checkPermission } from './src/utils/permissions';


export default class App extends Component {


  componentDidMount = () => {
    getUserData().then(res => {
      const userData = res;
      if (userData && !!userData.accessToken) {
        saveUserData(userData);
      }
      setTimeout(() => {
        SplashScreen.hide();
      })
    }).catch(err => {
      console.log(err, "@@@app .js")
    }
    )


    checkPermission();

  }


  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
        <FlashMessage position='top' />
      </SafeAreaProvider>
    )
  }
}



























// PushNotification.configure({
  //   // (optional) Called when Token is generated (iOS and Android)
  //   onRegister: function (token) {
  //     console.log("TOKEN:", token);
  //   },

  //   // (required) Called when a remote is received or opened, or local notification is opened
  //   onNotification: function (notification) {
  //     console.log("NOTIFICATION:", notification);

  //     // process the notification

  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },

  // })