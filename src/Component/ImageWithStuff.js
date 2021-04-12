import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import commonStyles from '../styles/commonStyles';
import ButtonWithIcon from './ButtonWithIcon';

export default function ImageWithStuff(props) {
  let {
    source = '',
    style = {},
    text = '',
    button = '',
    buttonText = '',
    onPress = '',
  } = props;
  return (
    <ImageBackground
      source={source}
      style={[{resizeMode: 'contain', borderRadius: 5}, style]}>
      <View style={commonStyles.absoluteBottom}>
        {button ? (
          <View>
            <Text style={commonStyles.mediumText}>{text}</Text>
            <View style={commonStyles.center}>
              <ButtonWithIcon text={buttonText} onPress={onPress} />
            </View>
          </View>
        ) : (
          <Text style={commonStyles.mediumText}>{text}</Text>
        )}
      </View>
    </ImageBackground>
  );
}
