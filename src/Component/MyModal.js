import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../constant/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScaleVertical} from '../styles/responsiveSize';

export default function MyModal(props) {
  let {
    isVisible,
    children,
    onRequestClose,
    headerStyle,
    headerTextStyle,
    headerImagestyle,
    colorArray = [
      colors.transparent,
      colors.blue,
      colors.blue,
    ],
  } = props;
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <LinearGradient style={{flex: 1}} colors={colorArray}>
        <View style={styles.body}>

          {/* header design start */}
          <View style={styles.containerStyle}>
            <View style={styles.btnStyleTop}></View>
          </View>
          <View
            style={[
              styles.containerStyle,
              {backgroundColor: colors.blue},
            ]}>
            <View style={styles.btnStyleBottom}></View>
          </View>
          {/* header design end */}

          <View style={{...styles.header, ...headerStyle}}>
            <Text style={{...styles.headerText, ...headerTextStyle}}>
              SORT BY
            </Text>
            <TouchableOpacity onPress={onRequestClose}>
              <Image
                style={{...styles.headerImage, ...headerImagestyle}}
                source={imagePath.setting}
              />
            </TouchableOpacity>
          </View>

          {children}
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.green,
    marginTop: -16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  containerStyle: {
      // backgroundColor: colors.green,
    height: 80,
  },
  btnStyleBottom: {
    flex: 1,
    backgroundColor: colors.green,
    borderTopRightRadius: 195,
  },
  btnStyleTop: {
    flex: 1,
    borderBottomLeftRadius: 195,
    backgroundColor: colors.blue,
  },
  header: {
    ...commonStyles.inline,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 24,
    marginBottom: moderateScaleVertical(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.textGreye0,
  },
  headerText: {
    ...commonStyles.fontBold16,
    color: colors.textBlack,
  },
  headerImage: {
    height: 25,
    width: 25,
  },
});
