import React, {Component} from 'react';
import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccountDetailBox from '../../../Component/AccountDetailBox';
import IconTextRow from '../../../Component/IconTextRow';
import ImageIcon from '../../../Component/ImageIcon';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePath from '../../../constant/imagePath';
import strings from '../../../constant/language';
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';
import QRCode from 'react-native-qrcode-svg';
import GradientButton from '../../../Component/GradientButton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

class Credit extends Component {
  state = {
    isVisible: false,
    isScannerVisible: false,
  };

  openModal = data => {
    this.setState(data);
  };
  closeModal = data => {
    this.setState(data);
  };

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
    this.setState({isScannerVisible: false});
  };

  render() {
    let {isVisible, isScannerVisible} = this.state;
    return (
      <WrapperContainer bgColor={colors.lightGreyBg}>
        <View style={[commonStyles.box, {height: 120}]}>
          <View style={styles.header}>
            <View style={[commonStyles.inline, commonStyles.center]}>
              <ImageIcon
                size={18}
                source={imagePath.book}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
              <Text style={commonStyles.mediumFont}> {strings.STROE}</Text>
              <ImageIcon
                size={18}
                iconStyle={{marginHorizontal: 5}}
                source={imagePath.downArrow}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
            </View>
            <View style={[commonStyles.inline, commonStyles.center]}>
              <ImageIcon
                iconStyle={{marginHorizontal: 5}}
                size={18}
                source={imagePath.setting}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
            </View>
          </View>
        </View>
        <View style={styles.floatingBox}>
          <Text style={styles.paymentText}>{strings.PAYMENT_HISTORY}</Text>
          <View
            style={[commonStyles.inline, {justifyContent: 'space-between'}]}>
            <Text>$ 0</Text>
            <TouchableOpacity
              style={[commonStyles.border, commonStyles.center]}>
              <IconTextRow
                text={strings.VIEW}
                source={imagePath.rightArrow}
                position="right"
                textStyle={{color: colors.themeColor}}
              />
            </TouchableOpacity>
          </View>
          <Text style={[commonStyles.smallGreyFont, {textAlign: 'left'}]}>
            collected {strings.PAYMENT} number
          </Text>
        </View>
        <View style={styles.payment}>
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => this.openModal({isScannerVisible: true})}>
              <View style={[commonStyles.center, {marginBottom: 5}]}>
                <ImageIcon
                  size={45}
                  iconStyle={{
                    backgroundColor: colors.lightGreyBg,
                    borderRadius: 20,
                  }}
                  source={imagePath.wallet}
                />
              </View>
              <Text style={[commonStyles.mediumFont, {color: colors.black}]}>
                {strings.OPEN_SCANNER}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.openModal({isVisible: true})}>
              <View style={[commonStyles.center, {marginBottom: 5}]}>
                <ImageIcon
                  size={45}
                  iconStyle={{
                    backgroundColor: colors.lightGreyBg,
                    borderRadius: 20,
                  }}
                  source={imagePath.qrCode}
                />
              </View>
              <Text style={[commonStyles.mediumFont, {color: colors.black}]}>
                {strings.QR_CODE}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* account detail box */}
        <AccountDetailBox />

        {/* qr code modal */}
        <Modal visible={isVisible}>
          <View style={styles.qrCode}>
            <QRCode
              size={300}
              value="www.google.com"
              logo={imagePath.book}
              logoSize={130}
              logoBackgroundColor={colors.transparent}
            />
            <GradientButton
              containerStyle={styles.absoluteBottom}
              btnText={strings.CLOSE}
              onPress={() => this.closeModal({isVisible: false})}
            />
          </View>
        </Modal>

        {/* qr code scanner */}
        <Modal visible={isScannerVisible}>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            // topContent={
            //   <Text style={commonStyles.buttonTextWhite}>
            //     Go to{' '}
            //     <Text style={commonStyles.mediumFont}>
            //       wikipedia.org/wiki/QR_code
            //     </Text>{' '}
            //     on your computer and scan the QR code.
            //   </Text>
            // }
            bottomContent={
              <GradientButton
                containerStyle={styles.absoluteBottom}
                btnText={strings.CLOSE}
                onPress={() => this.closeModal({isScannerVisible: false})}
              />
            }
          />
        </Modal>
      </WrapperContainer>
    );
  }
}

export default Credit;
