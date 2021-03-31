import React from 'react';
import { Image , View} from "react-native";
import colors from "../styles/colors";
import { verticalScale } from "../styles/responsiveSize";




export default function ImageIcon({ source,iconStyle={}, tintColor = colors.themeColor, size = verticalScale(14), backgroundColor = colors.white }) {
    return (
        <View style={iconStyle}>
            <Image source={source}
            style={
                {
                    height: size,
                    width: size,
                    tintColor: tintColor,
                    backgroundColor: backgroundColor,
                   ...iconStyle
                    // marginHorizontal: 5,
                    
                }
            } />
        </View>
    )
}