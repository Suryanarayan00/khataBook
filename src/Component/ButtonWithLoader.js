import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
const ButtonWithLoader = ({
  onPress = () => {},
  btnText = '',
  containerStyle,
  btnTextStyle = {},
  btnStyle = {},
  isLoading = false,
  color = colors.white,
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
      style={{
        ...commonStyles.buttonRect,
        marginTop: moderateScaleVertical(20),
        ...btnStyle,
      }}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={{...commonStyles.buttonTextWhite, color, ...btnTextStyle}}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
    </View>
  );
};

export default ButtonWithLoader;
