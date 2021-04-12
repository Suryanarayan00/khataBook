import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import Chatbox from '../../Component/ChatBox';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constant/language';
import navigationStrings from '../../constant/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateScaleVertical} from '../../styles/responsiveSize';

export default class Chat extends Component {
  state = {
    limit: 10,
    skip: 0,
    data: [],
    commonConversationData: [],
  };

  getFullConversation = item => {
    console.log(item, '@@@get full conversation');

    this.props.navigation.navigate(navigationStrings.CONVERSATION, {
      commonConversationId: item.commonConversationId,
      profileImage: item.userInfo.profileImg[0].thumbnail,
      name: item.userInfo.fullName,
      id: item.userInfo._id,
      lastSeen: item.updatedAt.slice(11, 19),
    });
  };

  componentDidMount = () => {
    let {limit, skip} = this.state;
    let query = `?limit=${limit}&skip=${skip}`;
    this.setState({isLoading: true, data: []}, () => {
      actions
        .getChatData(query)
        .then(res => {
          this.setState({data: res.data, isLoading: false});
        })
        .catch(err => this.setState({isLoading: false}));
    });
  };

  render() {
    let {data, isLoading} = this.state;
    return (
      <WrapperContainer>
        <View style={[style.chatHeader, commonStyles.center]}>
          <Text style={commonStyles.buttonTextWhite}>{strings.WHATSAPP}</Text>
        </View>
        <Chatbox data={data} onPress={this.getFullConversation} />
        <MaterialIndicator animating={isLoading} />
      </WrapperContainer>
    );
  }
}

const style = StyleSheet.create({
  chatHeader: {
    height: moderateScaleVertical(60),
    backgroundColor: colors.green,
    marginBottom: moderateScaleVertical(5),
  },
});
