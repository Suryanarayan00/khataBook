import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {textScale} from '../styles/responsiveSize';

export default function FeedbackCard(props) {
  const {data, _handleLoadMore, refreshing, isLoading, onRefresh} = props;

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
      <SafeAreaView
        style={[
          commonStyles.shadowStyle,
          {marginBottom: 6, padding: 10, marginLeft: 6, marginRight: 6},
        ]}>
        <View style={[commonStyles.inline, {justifyContent: 'space-evenly'}]}>
          <View style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Image
              source={{uri: profileImg[0].thumbnail}}
              style={style.testimonialImage}
            />
            <View>
              <Text style={commonStyles.smallGreyFont}>{bio.slice(0, 17)}</Text>
              <View style={commonStyles.inline}>
                <Text style={[commonStyles.smallGreyFont]}>
                  {' '}
                  {dob.date}/{dob.month}/{dob.year}{' '}
                </Text>
                <Text style={[commonStyles.smallGreyFont]}>{gender}</Text>
              </View>
            </View>
          </View>
          <View style={{padding: 5}}>
            <View style={[commonStyles.inline, commonStyles.center]}>
              <Text
                style={[commonStyles.mediumFont, {color: colors.themeColor}]}>
                "{fullName}{' '}
              </Text>
              {/* <Text style={[commonStyles.smallGreyFont]}>{contactDetails.phoneNo}</Text> */}
            </View>
            <ScrollView style={{height: 50}}>
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
            </ScrollView>
            <Text>______________________________</Text>
            <Text style={commonStyles.smallGreyFont}>
              {addressDetails.address.slice(0, 27)}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{backgroundColor: colors.lightGreyBg}}
      // numColumns={2}
      renderItem={_renderItem}
      ListFooterComponent={renderFooter}
      keyExtractor={(item, key) => key}
      onEndReached={_handleLoadMore}
      onEndReachedThreshold={0.5}
      bounces={false}

      // initialNumToRender={10}
    />
  );
}

const style = StyleSheet.create({
  card: {
    margin: 4,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.black,
    borderColor: colors.whiteOpacity22,
    borderWidth: 1,
    borderRadius: 5,
  },
  name: {
    fontFamily: fontFamily.boldItalic,
    paddingHorizontal: 5,
    fontSize: 35,
    color: colors.themeColor,
  },
  mail: {
    fontFamily: fontFamily.lightItalic,
    fontSize: 10,
  },
  testimonialImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
