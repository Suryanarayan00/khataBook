import React, { Component } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import WrapperContainer from "../../Component/WrapperContainer";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import actions from "../../redux/actions";
import Loader from "../../Component/Loader";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";
import styles from "./styles";
import TextInputWithLabel from "../../Component/TextInputWithLabel";
import strings from "../../constant/language";
import navigationStrings from "../../constant/navigationStrings";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { userContext } from "../../Context/Context";
import GradientButton from "../../Component/GradientButton";
import imagePath from "../../constant/imagePath";
import ImageIcon from "../../Component/ImageIcon";



class Login extends Component {


    state = {
        name: '',
        phoneNumber: '',
        password: '',
        isLoading: false
    }


    static contextType = userContext;



    onLoginUsingPhone = ()=>{
        let {phoneNumber} = this.state;
        this.setState({isLoading: true})
        actions.loginUsingPhone({"contactDetails":{"phoneNo": phoneNumber,
        "countryCode": "+91",
         "countryCodeISO": "IN"}}).then((res)=>{
            //  console.log(res)
             alert('successfull');
             this.setState({isLoading: false})
             this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION, {data: res.data});
         }).catch((error)=>{
             this.setState({isLoading: false})
             console.log(error);
         })
    }

    onChange = (key) => {
        return (value) => {
            this.setState({
                [key]: value,
            })
        }
    }

    

    render() {
        let {isLoading} = this.state
        return (
            <WrapperContainer>
                <View
                    style={{
                        height: moderateScaleVertical(80),
                        paddingHorizontal: moderateScale(24),
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <View style={[styles.inline,]}>
                            <ImageIcon source={imagePath.back} size={29} tintColor={colors.darkGrey}/>
                            <Text style={styles.fixedTopCenter}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1,
                        marginHorizontal: moderateScale(24),
                    }}>
                    <View style={{ height: moderateScaleVertical(48) }} />
                    <Text style={styles.header}>{strings.KHATABOOK}</Text>
                    <Text style={styles.txtSmall}>{strings.WELCOME_NOTE}</Text>
                    <View style={{ height: moderateScaleVertical(50) }} />

                    <View style={{ paddingVertical: 20, width: '100%' }}>
                        <TextInputWithLabel label="Name" onChangeText={this.onChange('name')} placeholder="Enter your name" />
                        {/* <PhoneNumberInput  onChangePhone={this.onChange('phoneNumber')}/> */}
                        {/*    <TextInput onChangeText={this.onChange('phoneNumber')}></TextInput> */}
                        <TextInputWithLabel label="phone Number" onChangeText={this.onChange('phoneNumber')} placeholder=" enter your phone number"/>
                        <TextInputWithLabel password={true} secureTextEntry={true} label="Password" onChangeText={this.onChange('password')} placeholder="Enter your password" />
                    </View>



                    <Loader isLoading={isLoading}/>



                    <GradientButton
                        containerStyle={{ marginTop: moderateScaleVertical(10) }}
                        onPress={this.onLoginUsingPhone}
                        btnText={strings.LOGIN_ACCOUNT}
                    />
                    <View style={styles.bottomContainer}>
                        <Text style={{ ...styles.txtSmall, color: colors.textGreyLight }}>
                            {strings.DID_NOT_HAVE_AN_ACCOUNT}
                            <Text
                                onPress={()=>this.props.navigation.navigate(navigationStrings.LOGIN)}
                                style={{
                                    color: colors.themeColor,
                                    fontFamily: fontFamily.futuraBtHeavy,
                                }}>
                                {' '}
                                {strings.SIGN_UP}
                            </Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </WrapperContainer>
        )
    }
}


export default Login;