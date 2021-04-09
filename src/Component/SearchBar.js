import React from 'react';
import {View, TextInput} from 'react-native';
import imagePath from '../constant/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import ImageIcon from './ImageIcon';

export default function SearchBar({containerStyle = {}, placeholder = '', source=imagePath.search, onChangeText}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: moderateScale(16),
        height: moderateScaleVertical(48),
        backgroundColor: colors.white,
        alignItems: 'center',
        ...containerStyle,
      }}>
      <ImageIcon source={source} tintColor={colors.themeColor} size={25}/>
      {/* <Image style={{opacity: 0.7, tintColor: colors.themeColor}} source={imagePath.search} /> */}
      <View style={{flex: 1,marginLeft:10}}>
        <TextInput
          style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: 0,
            fontFamily: fontFamily.medium,
            color: colors.textGrey,
            color: colors.textGreyOpcaity7,
          }}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
