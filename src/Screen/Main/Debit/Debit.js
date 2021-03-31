import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AccountDetailBox from '../../../Component/AccountDetailBox';
import IconTextRow from '../../../Component/IconTextRow';
import ImageIcon from '../../../Component/ImageIcon';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePath from '../../../constant/imagePath';
import strings from '../../../constant/language';
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';



class Debit extends Component{



    render(){
        return(
            <WrapperContainer bgColor={colors.lightGreyBg}>
            <View style={[commonStyles.box, { height: 120 }]}>
                <View style={[commonStyles.inline, { paddingVertical: 15, justifyContent: 'space-between', alignItems: 'center' }]}>
                    <View style={[commonStyles.inline, commonStyles.center]}>
                        <ImageIcon size={18} source={imagePath.book} backgroundColor={colors.themeColor} tintColor={colors.white} />
                        <Text style={commonStyles.mediumFont}> {strings.STROE}</Text>
                        <ImageIcon size={18} iconStyle={{ marginHorizontal: 5 }} source={imagePath.downArrow} backgroundColor={colors.themeColor} tintColor={colors.white} />
                    </View>
                    <View style={[commonStyles.inline, commonStyles.center]}>
                        <ImageIcon iconStyle={{ marginHorizontal: 5 }} size={18} source={imagePath.setting} backgroundColor={colors.themeColor} tintColor={colors.white} />
                    </View>
                </View>
            </View>
            <View style={[commonStyles.paddingBox, { backgroundColor: colors.white, marginTop: -50, marginHorizontal: 40 }]}>
                <Text style={[commonStyles.mediumFont, { color: colors.textGrey, textAlign: 'left' }]}>{strings.PAYMENT_HISTORY}</Text>
                <View style={[commonStyles.inline, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <Text>$ 0</Text>
                    <TouchableOpacity style={[commonStyles.border, commonStyles.center]}>
                        <IconTextRow text={strings.VIEW} source={imagePath.rightArrow} position='right' textStyle={{ color: colors.themeColor }} />
                    </TouchableOpacity>
                </View>
                <Text style={[commonStyles.smallGreyFont, { textAlign: 'left' }]}>collected {strings.PAYMENT} number</Text>
            </View>
            <View style={[commonStyles.paddingBox, commonStyles.inline, { backgroundColor: colors.lightGreyBg, justifyContent: 'space-between', marginHorizontal: 5 }]}>
                <View style={[commonStyles.paddingBox, { backgroundColor: colors.white, width: '48%' }]}>
                    <View style={[commonStyles.center,{marginBottom: 5}]}>
                        <ImageIcon size={45} iconStyle={{ backgroundColor: colors.lightGreyBg, borderRadius: 20 }} source={imagePath.wallet} />
                    </View>
                    <Text style={[commonStyles.mediumFont, { color: colors.black }]}>{strings.REQUEST_MONEY}</Text>
                </View>
                <View style={[commonStyles.paddingBox, { backgroundColor: colors.white, width: '48%' }]}>
                    <View style={[commonStyles.center,{marginBottom: 5}]}>
                        <ImageIcon size={45} iconStyle={{ backgroundColor: colors.lightGreyBg, borderRadius: 20 }} source={imagePath.qrCode} />
                    </View>
                    <Text style={[commonStyles.mediumFont, { color: colors.black }]}>{strings.QR_CODE}</Text>
                </View>
            </View>
            
            {/* account detail box */}
            <AccountDetailBox/>
        </WrapperContainer>
        )
    }
}

export default Debit ;