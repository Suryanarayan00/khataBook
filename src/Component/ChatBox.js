import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {textScale, verticalScale} from '../styles/responsiveSize';

export default function Chatbox(props) {
  let {data, onPress} = props;
  let _renderItem = ({item, index}) => {
    let {userInfo, lastMessage, messageCount} = item;

    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={style.chatBox}>
          <View>
            <Image
              source={{uri: userInfo.profileImg[0].thumbnail}}
              style={style.profileImage}
            />
          </View>
          <View style={style.textArea}>
            <View style={style.chatTop}>
              <Text style={[commonStyles.mediumFont, {color: colors.black}]}>
                {userInfo.fullName}
              </Text>
              <Text style={[commonStyles.mediumFont, {color: colors.black}]}>
                {lastMessage[0].createdAt.slice(0, 10)}
              </Text>
            </View>
            <View style={style.chatTop}>
              <Text style={commonStyles.smallGreyFont}>
                {lastMessage[0].text}
              </Text>
              <Text style={[commonStyles.smallGreyFont, style.messageCount]}>
                {messageCount.length}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      contentContainerStyle={{backgroundColor: colors.lightGreyBg}}
      // numColumns={2}
      renderItem={_renderItem}
      keyExtractor={(item, key) => key}

      // initialNumToRender={10}
    />
  );
}

const style = StyleSheet.create({
  chatBox: {
    height: verticalScale(70),
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  profileImage: {
    margin: 2,
    borderRadius: 40,
    height: '80%',
    width: 60,
  },
  textArea: {
    letterSpacing: 1,
    // paddingLeft: 2,
    justifyContent: 'space-around',
    flex: 0.9,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGreyBg,
  },
  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chat: {
    fontSize: textScale(15),
    color: colors.textGrey,
  },
  messageCount: {
    borderRadius: 20,
    backgroundColor: colors.green,
    paddingHorizontal: 2,
    color: colors.white,
  },
});
