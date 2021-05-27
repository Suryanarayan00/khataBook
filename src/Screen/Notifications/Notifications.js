import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import constant from '../../constant/constant';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

export class Notifications extends Component {
  render() {
    return (
      <WrapperContainer statusBarColor={colors.blue} bgColor={colors.blue}>
        <Header headerStyle={styles.componentHeaderStyle} />
        <View style={styles.header}>
          <Text style={styles.Notifications}>Notifications</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 8, 10].map((value, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.notificationBox,
                    {
                      backgroundColor:
                        index == 0 ? colors.white : colors.textGreyLight,
                      borderTopLeftRadius: index == 0 || index == 1 ? 24 : 0,
                    },
                  ]}>
                  <Image style={styles.image} source={constant.image2} />
                  <View style={styles.messageBox}>
                    <Text style={styles.message}>Some benefit of Cycling</Text>
                    <Text style={styles.title}>benefit of Cycling</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </WrapperContainer>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({
  componentHeaderStyle: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colors.blue,
  },
  header: {
    ...commonStyles.inline,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  Notifications: {
    fontSize: 20,
    fontFamily: fontFamily.futuraHeavyBt,
    color: colors.black,
  },
  viewAll: {
    fontFamily: fontFamily.lightItalic,
    fontSize: 15,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginLeft: 8,
    paddingLeft: 8,
  },
  notificationBox: {
    ...commonStyles.inline,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderTopLeftRadius: 24,
  },
  image: {
    minHeight: 70,
    marginRight: 8,
    borderRadius: 450,
    flex: 0.7,
    resizeMode: 'stretch',
  },
  messageBox: {
    flex: 3,
    marginLeft: 8,
    justifyContent: 'space-evenly',
  },
  message: {
    lineHeight: 25,
    fontSize: 18,
    textAlign: 'justify',
  },
  title: {
    textAlign: 'justify',
    color: colors.textGrey,
  },
});
