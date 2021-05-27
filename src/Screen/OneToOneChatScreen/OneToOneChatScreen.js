import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constant/imagePath';
import socketStrings from '../../constant/socketStrings';
import actions from '../../redux/actions';
import socketServices from '../../utils/socketServices';
import {MaterialIndicator} from 'react-native-indicators';

class OneToOneChatScreen extends Component {
  state = {
    messages: [],
    isLoading: false,
  };

  componentDidMount() {
    let {userData} = this.props;
    this.setState({isLoading: true});
    socketServices.initializeSocket(userData.accessToken);
    setTimeout(() => {
      this.getChatListing();
      socketServices.on(socketStrings.RECEIVED_MESSAGE, this.onReceiveMessage);
    });
  }

  onSend(messages = []) {
    // alert(JSON.stringify(socketServices.emit));

    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const {id, commonConversationId} = this.props.route.params;
    const {userData} = this.props;

    socketServices.emit(socketStrings.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    console.log(messages);
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  componentWillUnmount() {
    socketServices.removeListener(socketStrings.ACKNOWLEDGED_SENT_BY_RECEIVER);
    socketServices.removeListener(socketStrings.RECEIVED_MESSAGE);
  }

  getChatListing = () => {
    const {commonConversationId, id, profileImage} = this.props.route.params;
    actions
      .getFullConversation(
        `?commonConversationId=${commonConversationId}&limit=100`,
      )
      .then(res => {
        console.log(res.data);

        //To send back response that all the messages have been seen;
        socketServices.emit(socketStrings.SEEN_ALL_MESSAGES, {
          senderId: id,
          isRead: true,
          recieverId: (this.props.userData && this.props.userData._id) || '',
        });
        //Initalizing the chat history
        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId?._id,
              name: data.senderId.firstName,
              avatar: profileImage,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({isLoading: false, messages});
      })
      .catch(error => {
        console.log(error);
      });
  };

  onReceiveMessage = data => {
    const {commonConversationId, profileImage, name} = this.props.route.params;
    const message = {
      _id: data._id,
      text: data.text,
      createdAt: data.createdAt,
      user: {
        _id: data.senderId,
        name: name,
        avatar: profileImage,
      },
    };

    if (data.commonConversationId === commonConversationId) {
      socketServices.emit(socketStrings.SEEN_ALL_MESSAGES, {
        senderId: data.senderId,
        isRead: true,
        recieverId: data.recieverId,
      });

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    }
  };

  render() {
    const {messages, isLoading} = this.state;
    const {userData} = this.props;
    const {profileImage, name, lastSeen} = this.props.route.params;

    return (
      <>
        <View style={[styles.profileHeader, commonStyles.inline]}>
          <TouchableOpacity
            style={[commonStyles.center, {paddingHorizontal: 10}]}
            onPress={this.props.navigation.goBack}>
            <Image source={imagePath.back} style={styles.back} />
          </TouchableOpacity>
          <View style={commonStyles.center}>
            <Image source={{uri: profileImage}} style={styles.profileImage} />
          </View>
          <View>
            <Text style={[commonStyles.buttonTextWhite, {padding: 10}]}>
              {name}
            </Text>
            <Text style={[commonStyles.buttonTextWhite, {fontSize: 10}]}>
              last Seen {lastSeen}
            </Text>
          </View>
        </View>
        {isLoading ? <MaterialIndicator animating={isLoading} /> : null}
        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: userData._id,
          }}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.authReducers.userData,
  };
};

export default connect(mapStateToProps)(OneToOneChatScreen);
