import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';

class SearchCustomerCard extends Component {
  // let {data} = this.props;

  render() {
    let {data, isLoading} = this.props;

    let renderFooter = () => {
      if (isLoading) {
        return (
          <View style={{paddingBottom: 40}}>
            <MaterialIndicator color={colors.themeColor} />
          </View>
        );
      }
      return null;
    };

    let _renderItem = ({item, index}) => {
      let {
        profileImg,
        bio,
        email,
        gender,
        dob,
        fullName,
        contactDetails,
        addressDetails,
        questions,
      } = item;

      return (
        <View
          style={[commonStyles.paddingBox, commonStyles.center, {margin: 5}]}>
          <View>
            <Image
              source={{uri: profileImg[1].thumbnail}}
              style={style.profileImage}
            />
            <Text style={[commonStyles.buttonTextWhite, style.dob]}>
              {dob.date}/{dob.month}/{dob.year}
            </Text>
          </View>
          <View style={commonStyles.center}>
            <Text
              style={[commonStyles.buttonTextWhite, {fontSize: textScale(18)}]}>
              {fullName}
            </Text>
            <View style={commonStyles.inline}>
              <Text style={[commonStyles.smallGreyFont, {color: colors.white}]}>
                {email}
              </Text>
            </View>
          </View>
          <Text style={[commonStyles.smallGreyFont, {color: colors.white}]}>
            {item.bio}
          </Text>
          <Text style={[commonStyles.smallGreyFont, {color: colors.white}]}>
            {addressDetails.address.slice(0, 27)}
          </Text>

          {questions.map((value, key) => {
            return (
              <Text
                style={{
                  justifyContent: 'center',
                  fontFamily: fontFamily.medium,
                  color: colors.textGreyB,
                  fontSize: textScale(10),
                }}
                key={key}>
                . {value}
              </Text>
            );
          })}
        </View>
      );
    };

    return (
      <FlatList
        data={data}
        contentContainerStyle={{backgroundColor: colors.lightGreyBg}}
        // numColumns={2}
        renderItem={_renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, key) => key}
        bounces={false}
        // initialNumToRender={10}
        // ItemSeparatorComponent={() => <Text> ‧ </Text>}
        // horizontal={true}
      />
    );
  }
}

export default SearchCustomerCard;

const style = StyleSheet.create({
  profileImage: {
    width: moderateScale(120),
    resizeMode: 'cover',
    borderRadius: 140,
    height: moderateScaleVertical(120),
  },
  dob: {
    fontSize: textScale(5),
    top: -28,
    left: 49,
  },
});
