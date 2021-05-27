import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GradientButton from '../../Component/GradientButton';
import Header from '../../Component/Header';
import MyIcon from '../../Component/MyIcon';
import constant from '../../constant/constant';
import imagePath from '../../constant/imagePath';
import colors from '../../styles/colors';

export default class ReadBlog extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.backgroundColor2}}>
        <StatusBar
          translucent={true}
          barStyle={colors.barStyle}
          backgroundColor={colors.transparent}
        />
        <ImageBackground
          imageStyle={styles.imageBox}
          style={styles.postImage}
          source={constant.image1}>
          <Header headerStyle={styles.headerStyle} rightIcon={imagePath.book} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <MyIcon
              container={styles.iconContainer}
              source={imagePath.qrCode}
            />
            <MyIcon
              container={styles.iconContainer}
              source={imagePath.addCustomer}
            />
            <MyIcon
              container={styles.iconContainer}
              source={imagePath.rightArrow}
            />
            <MyIcon
              container={styles.iconContainer}
              source={imagePath.setting}
            />
            <GradientButton
              containerStyle={{
                marginTop: 8,
                width: '100%',
                backgroundColor: 'transparent',
              }}
              borderRadius={24}
              colorsArray={[colors.transparent, colors.blue]}
              btnStyle={{borderWidth: 1, borderColor: colors.white}}
              btnText="How Coffe Reduces Stress?"
            />
          </View>
        </ImageBackground>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <View style={styles.headerBox}>
            <Text style={styles.textHeader}>Surya bhai- The DON</Text>
            <Text style={styles.textHeader}>
              The Blog which makes you special
            </Text>
          </View>
          <Text style={styles.paragraph}>
            It’s no secret that fewer form fields lead to higher conversion
            rates. Reducing them not only makes a friendlier first impression,
            but it decreases error rates and completion time. Therefore, you
            should remove as many unnecessary optional fields as you can. Many
            apps use optional fields as an opportunity to gain knowledge about
            the user for research purposes. They treat it like a survey form and
            ask them a lot of prying questions. Users don’t get any benefit, and
            it causes them to skip those fields. A sign-up or registration form
            isn’t the place to survey your users. Save those questions for after
            the initial form. Users are in a hurry and only need the data fields
            necessary to create an account. Don’t bog them down with optional
            survey fields that clutter the form and their mind. It’s no secret
            that fewer form fields lead to higher conversion rates. Reducing
            them not only makes a friendlier first impression, but it decreases
            error rates and completion time. Therefore, you should remove as
            many unnecessary optional fields as you can. Many apps use optional
            fields as an opportunity to gain knowledge about the user for
            research purposes. They treat it like a survey form and ask them a
            lot of prying questions. Users don’t get any benefit, and it causes
            them to skip those fields. A sign-up or registration form isn’t the
            place to survey your users. Save those questions for after the
            initial form. Users are in a hurry and only need the data fields
            necessary to create an account. Don’t bog them down with optional
            survey fields that clutter the form and their mind.
          </Text>
        </ScrollView>
        <MyIcon
          container={{...styles.iconContainer, position: 'absolute', bottom: 16,right: 0}}
          source={imagePath.downArrow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBox: {
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  postImage: {
    //   zIndex: 3,
    flex: 0.8,
    height: '100%',
    overflow: 'hidden',
    // paddingHorizontal: 24,
    justifyContent: 'space-between',
    // paddingBottom: 16,
    // width: '100%',
    // resizeMode: 'stretch',
  },
  headerStyle: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginTop: 8,
    marginHorizontal: 24,
    shadowColor: colors.greenTop,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
  body: {
    // marginTop: -16,
    backgroundColor: colors.backgroundColor2,
    flex: 2,
    // paddingTop: 16,
    paddingHorizontal: 24,
  },
  headerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textHeader: {
    color: colors.textColorDarkBlack,
    fontWeight: 'bold',
    fontSize: 16,
  },

  paragraph: {
    color: colors.textColorLighttBlack,
    textAlign: 'justify',
    fontSize: 15,
    lineHeight: 24,
  },
});
