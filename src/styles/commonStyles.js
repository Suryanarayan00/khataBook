import { StyleSheet } from "react-native";
import colors from "./colors";
import fontFamily from "./fontFamily";
import { moderateScaleVertical, textScale } from "./responsiveSize";



export const hitSlopProp = {
    top: 12,
    right: 12,
    left: 12,
    bottom: 12,
};

export default StyleSheet.create({


    buttonRect: {
        height: moderateScaleVertical(50),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        borderWidth: 1,
        borderColor: colors.themeColor,
        borderRadius: 4,
    },
    shadowStyle: {
        backgroundColor: colors.white,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
        padding: 5,
        margin: 5,
      },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextWhite: {
        fontFamily: fontFamily.futuraBtHeavy,
        textTransform: 'uppercase',
        color: colors.white,
        textAlign: "center"
    },
    mediumFont: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fontFamily.medium,
        padding: 5
    },
    smallGreyFont: {
        fontSize: textScale(10),
        fontFamily: fontFamily.lightItalic,
        color: colors.textGreyB,
        textAlign: "center",
    },
    mediumBoldFont: {
        fontSize: textScale(17),
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        color: colors.themeColor,
    },
    absoluteBottom: {
        position: 'absolute',
        bottom: 25,
        padding: 10,
        width: '100%',
    },
    paddingBox: {
        backgroundColor: colors.themeColor,
        padding: 15,
    },
    box: {
        backgroundColor: colors.themeColor,
        paddingHorizontal: 10,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inline: {
        // display: 'flex',
        flexDirection: 'row',
    },
    imageIcon: {
        // width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    conjusted: {
        padding: 0,
        margin: 0,
    },
    border: {
        borderWidth: 1,
        borderColor: colors.borderLight,
        padding: 5,
        borderRadius: 5,
    }
})