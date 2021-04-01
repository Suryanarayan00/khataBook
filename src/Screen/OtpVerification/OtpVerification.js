import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import GradientButton from '../../Component/GradientButton';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constant/language';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constant/navigationStrings';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import { otpTimerCounter } from '../../utils/helperFunctions';
import imagePath from '../../constant/imagePath';
import actions from '../../redux/actions';
import Loader from '../../Component/Loader';
import ImageIcon from '../../Component/ImageIcon';
import { saveUserData } from '../../redux/actions/authActions';
import { getUserData } from '../../utils/utils';




const CELL_COUNT = 5;
export default function OtpVerification({ navigation, route }) {
  // console.log(route)
  const [state, setState] = useState({
    timer: 100,
    otp: '',
    isLoading: false
  });

  const updateState = data => setState(state => ({ ...state, ...data }));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({ timer: timer - 1 });
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);


  const onChangeOtp = otp => {
    updateState({ otp });
  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({ otp: state.otp, cellCount: CELL_COUNT });
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

  const onVerifyOtp = () => {
    updateState({ isLoading: true })
    const { otp } = state;
    if (otp.length < 4)
      alert('Please enter otp First', otp);
    else {
      actions.otpVerification({
        "userId": route.params.data.userId,
        "otp": otp,
        "deviceToken": "123",
        "registerFrom": "ANDROID"
      }).then((res) => {
        updateState({ isLoading:false })
        getUserData().then(res=>{
          saveUserData(res)
        }).catch(err=>console.log(err))
        

      }).catch((error) => {
        alert(error.message);
        navigation.navigate(navigationStrings.LOGIN)
        updateState({ isLoading: false })
      })
    }
  };

  const { timer, isLoading } = state;
  return (
    <WrapperContainer>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{ alignSelf: 'flex-start' }}>
          <ImageIcon source={imagePath.back} size={38} tintColor={colors.darkGrey}/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: moderateScaleVertical(88),
          marginHorizontal: moderateScale(24),
        }}>
        <Text style={styles.header}>{strings.OTP_VERIFICATION}</Text>
        <Text style={styles.txtSmall}>{strings.ENTER_OTP_SENT}</Text>
        <View style={{ height: moderateScaleVertical(50) }} />
        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.root}
          blurOnSubmit
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          selectionColor={colors.themeColor}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />



        <Loader isLoading={isLoading} />



        <GradientButton
          onPress={onVerifyOtp}
          containerStyle={{ marginTop: moderateScaleVertical(10) }}
          btnText={strings.VERIFY_ACCOUNT}
        />
        {timer > 0 ? (
          <View style={styles.bottomContainer}>
            <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
              {strings.RESEND_CODE_IN}
              <Text
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {`${otpTimerCounter(timer)} min`}
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
              {strings.DIDNT_GET_OTP}
              <Text
                style={{
                  color: colors.themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {' '}
                {strings.RESEND_CODE}
              </Text>
            </Text>
          </View>
        )}
      </View>
    </WrapperContainer>
  );
}
