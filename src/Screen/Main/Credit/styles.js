import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";

export default StyleSheet.create({
    payment: {
        ...commonStyles.paddingBox,
        ...commonStyles.inline,
        backgroundColor: colors.lightGreyBg,
        justifyContent: 'space-between',
        marginHorizontal: 5
    },
    absoluteBottom: {
        position: 'absolute',
        bottom: 10,
        width: '100%'
    },
    box: {
        ...commonStyles.paddingBox,
        backgroundColor: colors.white,
        width: '48%'
    },
    header: {
        ...commonStyles.inline,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    floatingBox: {
        ...commonStyles.paddingBox,
        backgroundColor: colors.white,
        marginTop: -50,
        marginHorizontal: 40
    },
    paymentText: {
        ...commonStyles.mediumFont,
        color: colors.textGrey,
        textAlign: 'left'
    }
})