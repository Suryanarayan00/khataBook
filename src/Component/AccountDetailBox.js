import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import imagePath from "../constant/imagePath";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import { textScale, verticalScale } from "../styles/responsiveSize";




export default function AccountDetailBox(props) {
  // let { chatLog } = props
  // let { id, profileImage, profileName, chat, time, chatNumber } = chatLog
  return (
    <View style={style.chatBox}>
      <View style={{ width: 50 }}>
        <Image source={imagePath.wallet} style={style.profileImage} />
      </View>
      <View style={style.textArea}>
        <View style={style.chatTop}>
          <Text style={[commonStyles.mediumFont, {color: colors.black}]}>profileName</Text>
          <Text style={[commonStyles.mediumFont, {color: colors.black}]}>time</Text>
        </View>
        <View style={style.chatTop}>
          <Text style={commonStyles.smallGreyFont}>chat</Text>
          <Text style={[commonStyles.smallGreyFont]}>chatNumber</Text>
        </View>
      </View>
    </View>
  );
}



const style = StyleSheet.create({
  chatBox: {
    height: verticalScale(70),
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-around",
  },
  profileImage: {
    margin: 2,
    borderRadius: 40,
    height: "80%",
    width: 50,
  },
  textArea: {
    letterSpacing: 1,
    // paddingLeft: 2,
    justifyContent: "space-around",
    flex: 0.9,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGreyBg,
  },
  chatTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chat: {
    fontSize: textScale(15),
    color: colors.textGrey,
  },
});
