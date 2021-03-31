import React from 'react';
import { View, Text, Image } from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import { textScale } from '../styles/responsiveSize';
import ImageIcon from './ImageIcon';

export default function IconTextRow({
  text,
  source,
  style = {},
  textStyle = {},
  position = 'left',
  tintColor,
  size,
  backgroundColor,
  iconStyle={}
}) {
  return (
    <View>
      {position == 'left' ?
        <View style={{ flexDirection: 'row', ...style }}>
          <ImageIcon source={source} iconStyle={iconStyle}  tintColor={tintColor} size={size} />
          <Text
            style={{
              ...commonStyles.mediumText,
              fontSize: textScale(12),
              color: colors.white,
              marginLeft: 2,
              opacity: 1,
              ...textStyle,
            }}>
            {text}
          </Text>
        </View> :
        <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>

          <Text
            style={{
              ...commonStyles.mediumText,
              fontSize: textScale(12),
              color: colors.white,
              marginRight: 2,
              opacity: 1,
              ...textStyle,
            }}>
            {text}
          </Text>
          <ImageIcon source={source} tintColor={tintColor} size={size} />
        </View>}
    </View>
  );
}
