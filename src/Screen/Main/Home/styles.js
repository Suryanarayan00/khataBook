import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";

export default StyleSheet.create({
    header: {
        ...commonStyles.inline,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    totalPayment: {
        ...commonStyles.box,
        backgroundColor: colors.white,
        paddingTop: 15
    },
    buttonRow: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchBar: {
        ...commonStyles.inline,
        ...commonStyles.center,
        paddingTop: 5,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.borderLight,
        width: '100%'
    },
    button: {
        ...commonStyles.border,
        ...commonStyles.center,
        position: 'absolute',
        width: '50%',
        bottom: 10,
        right: 10,
        backgroundColor: colors.pink,
    },
})