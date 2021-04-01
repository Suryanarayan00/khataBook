import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import imagePath from '../constant/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical, textScale, verticalScale } from '../styles/responsiveSize';






class SearchCustomerCard extends Component {


    render() {
        return (
            <View style={[commonStyles.paddingBox, commonStyles.center]}>
                <Image source={imagePath.setting} style={style.profileImage} />
                <View style={commonStyles.center}>
                    <Text style={[commonStyles.buttonTextWhite, { fontSize: textScale(18) }]}>Suraj Kumar</Text>
                    <View style={commonStyles.inline}>
                        <Text style={[commonStyles.smallGreyFont, { color: colors.white }]}>+917543875613  </Text>
                        <Text style={[commonStyles.smallGreyFont, { color: colors.white }]}>sk8013445@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}



export default SearchCustomerCard;


const style = StyleSheet.create({
    profileImage: {
        width: moderateScale(120),
        resizeMode: 'cover',
        borderRadius: 140,
        height: moderateScaleVertical(120)
    },
})