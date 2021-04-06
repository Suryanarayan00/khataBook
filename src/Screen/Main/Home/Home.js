// natural component import
import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';


// custom Component import
import IconTextRow from '../../../Component/IconTextRow';
import ImageIcon from '../../../Component/ImageIcon';
import WrapperContainer from '../../../Component/WrapperContainer';

// constant import
import imagePath from '../../../constant/imagePath';
import strings from '../../../constant/language';
import actions from '../../../redux/actions';


// style import
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';


class Home extends Component {


    changeThemeColor = () => {
        actions.changeThemeColor('red');
    }



    render() {
        return (
            <WrapperContainer>


                {/* box */}
                < View style={commonStyles.box} >
                    <View style={[commonStyles.inline, { paddingVertical: 15, justifyContent: 'space-between', alignItems: 'center' }]}>
                        <View style={[commonStyles.inline, commonStyles.center]}>
                            <ImageIcon size={18} source={imagePath.book} backgroundColor={colors.themeColor} tintColor={colors.white} />
                            <Text style={commonStyles.mediumFont}> A.K.Store</Text>
                            <ImageIcon size={18} iconStyle={{ marginHorizontal: 3 }} source={imagePath.downArrow} backgroundColor={colors.themeColor} tintColor={colors.white} />
                        </View>
                        <View style={[commonStyles.inline, commonStyles.center]}>
                            {/* <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={[commonStyles.paddingBox, commonStyles.border, { backgroundColor: colors.theme2Color }]}><Text>theme</Text></TouchableOpacity> */}
                            <TouchableOpacity onPress={actions.logout} style={[commonStyles.paddingBox, commonStyles.border]}><Text>{strings.LOGOUT}</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={[commonStyles.box, { backgroundColor: colors.white, paddingTop: 15 }]}>
                        <View style={[commonStyles.inline, { justifyContent: 'space-evenly' }]}>
                            <View style={commonStyles.center}>
                                <Text style={[commonStyles.mediumFont, { color: colors.green }]}>$ 420</Text>
                                <Text style={commonStyles.smallGreyFont}>{strings.YOU_WILL_GET}</Text>
                            </View>
                            <View style={commonStyles.center}>
                                <Text style={[commonStyles.mediumFont, { color: colors.pink }]}>$ 420</Text>
                                <Text style={commonStyles.smallGreyFont}>{strings.YOU_WILL_GET}</Text>
                            </View>
                        </View>
                        <IconTextRow size={18} style={{ justifyContent: 'center', paddingVertical: 15 }} textStyle={{ color: colors.themeColor, }} text={strings.VIEW_REPORT} position='right' textStyle={{ color: colors.themeColor }} source={imagePath.rightArrow} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 15, alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '48%' }}>
                            <IconTextRow iconStyle={{ paddingHorizontal: 5 }} tintColor={colors.pink} style={{ backgroundColor: colors.white, paddingVertical: 5, ...commonStyles.center, borderRadius: 3 }} text={strings.LEARN_BUISNESS} textStyle={{ color: colors.themeColor }} source={imagePath.viedo} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '48%' }}>
                            <IconTextRow iconStyle={{ paddingHorizontal: 5 }} size={19} tintColor={colors.yellow} style={{ backgroundColor: colors.white, paddingVertical: 5, ...commonStyles.center, borderRadius: 3 }} text={strings.MAKE_OFFER} textStyle={{ color: colors.themeColor }} source={imagePath.offer} />
                        </TouchableOpacity>
                    </View>

                </View >



                {/* search and filter */}
                < View style={[commonStyles.inline, commonStyles.center, { paddingTop: 5, paddingHorizontal: 15, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.borderLight, width: '100%' }]} >
                    <ImageIcon size={18} source={imagePath.search} />
                    <TextInput style={{ width: '84%', marginLeft: 3 }} placeholder={'number ' + strings.CUSTOMER} />
                    <ImageIcon iconStyle={{ marginHorizontal: 3 }} size={18} source={imagePath.filter} />
                    <ImageIcon size={28} source={imagePath.pdf} />
                </View >


                {/* add customer button */}
                < TouchableOpacity style={[commonStyles.border, commonStyles.center, { position: 'absolute', width: '50%', bottom: 10, right: 10, backgroundColor: colors.pink, }]} >
                    <IconTextRow size={29} tintColor={colors.white} iconStyle={{ backgroundColor: colors.pink, paddingRight: 10 }} text={strings.ADD_CUSTOMER} source={imagePath.addCustomer} />
                </TouchableOpacity >

            </WrapperContainer >
        )
    }
}

export default Home;