package com.finalshowdown;
import android.os.Bundle; // here 

import com.facebook.react.ReactActivity;

// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; // here 
// react-native-splash-screen < 0.3.1 
// import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "finalShowdown";
  }
}
