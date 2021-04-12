import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScaleVertical,
  textScale,
  moderateScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import WrapperContainer from '../../Component/WrapperContainer';
import navigationStrings from '../../constant/navigationStrings';
import strings from '../../constant/language';
import GradientButton from '../../Component/GradientButton';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export default function OuterScreen({navigation}) {
  return (
    <WrapperContainer>
      <View style={{marginTop: moderateScaleVertical(100), flex: 1}}>
        <Text style={[commonStyles.mediumBoldFont, {color: colors.textGrey}]}>
          {strings.LOGIN}
        </Text>
        <View style={{marginHorizontal: moderateScale(24)}}>
          <Text
            style={[
              commonStyles.mediumBoldFont,
              {fontFamily: fontFamily.futura, color: colors.textGreyB},
            ]}>
            {strings.WELCOME_NOTE}
          </Text>
          <GradientButton
            containerStyle={{marginTop: moderateScaleVertical(140)}}
            btnText={strings.LOGIN_USING_PHONE}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />

          <GradientButton
            containerStyle={{marginTop: moderateScaleVertical(50)}}
            btnText={strings.LOGIN_USING_EMAIL}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={styles.innerBottomContainer}>
            <Text style={[styles.txtSmall, styles.alreadyText]}>
              {strings.DID_NOT_HAVE_AN_ACCOUNT}
            </Text>
            <TouchableOpacity
              hitSlop={hitSlopProp}
              onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
              <Text style={styles.login}> {strings.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
}
