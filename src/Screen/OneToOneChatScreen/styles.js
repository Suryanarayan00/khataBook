import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScaleVertical} from '../../styles/responsiveSize';

export default StyleSheet.create({
  profileHeader: {
    height: moderateScaleVertical(60),
    backgroundColor: colors.green,
    marginBottom: moderateScaleVertical(5),
  },
  profileImage: {
    margin: 2,
    borderRadius: 40,
    height: 50,
    width: 50,
  },
  searchBar: {
    ...commonStyles.border,
    ...commonStyles.absoluteBottom,
    bottom: 2,
  },
  back: {
    margin: 2,
    borderRadius: 40,
    height: 30,
    width: 30,
    paddingHorizontal: 10,
  },
  messgeTextInput: {
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    paddingHorizontal: 20,
    // marginVertical: 30,
    textAlignVertical: 'center',
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },
});
