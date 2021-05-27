import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import imagePath from '../constant/imagePath';
import {hitSlopProp} from '../styles/commonStyles';
import MyIcon from './MyIcon';

const Header = ({
  headerStyle,
  leftIcon = imagePath.rightArrow,
  centerTitle,
  textStyle,
  horizontLine = true,
  rightIcon = '',
  onPressLeft,
  onPressRight,
  customRight,
  hideRight = true,
}) => {
  return (
    <>
      <View
        style={{
          ...styles.headerStyle,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...headerStyle
        }}>
        <View style={{alignItems: 'flex-start', minWidth: moderateScale(72)}}>
          <TouchableOpacity
            hitSlop={hitSlopProp}
            activeOpacity={0.7}
            onPress={!!onPressLeft ? onPressLeft : () => {}}>
            <MyIcon source={leftIcon}/>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...styles.textStyle,
            ...textStyle,
            width: moderateScale(150),
          }}>
          {centerTitle}
        </Text>
        <View style={{alignItems: 'flex-end', minWidth: moderateScale(72)}}>
          {!!rightIcon ? (
            <TouchableOpacity onPress={onPressRight}>
              <MyIcon source={rightIcon}/>
            </TouchableOpacity>
          ) : !!customRight ? (
            customRight()
          ) : hideRight ? (
            <View style={{width: 25}} />
          ) : (
            <Image source={imagePath.cartShop} />
          )}
        </View>
      </View>
    </>
  );
};
export default Header;
const styles = StyleSheet.create({
  headerStyle: {
    // padding: moderateScaleVertical(16),
  },
  leftIcon: {
    height: 25,
    width: 25,
    tintColor: colors.textGreyB,
    backgroundColor: colors.white,
  },
  textStyle: {
    color: colors.black2Color,
    fontSize: textScale(17),
    lineHeight: textScale(28),
    textAlign: 'center',
    fontFamily: fontFamily.futuraBtHeavy,
  },
});
