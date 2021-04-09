import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../Component/SearchBar';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constant/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import socketServices from '../../utils/socketServices';
import { GiftedChat, Bubble, Composer, Send } from 'react-native-gifted-chat';
import socketStrings from '../../constant/socketStrings';


class OneToOneChatScreen extends Component {



    constructor(props) {
        super(props);
        // const favConv = props.route.params.favConv;
        this.state = {
            messages: [],
            currentMsg: '',
            //   favConv,
            //   userCurrentLevel: {},
            //   showUploadPhotoAlert: false,
            //   isLoading: true,
            //   isLoadingEarlier: false,
            //   questionModal: false,
            //   showLevelUpModal: false,
        };
    }


    //   componentDidMount() {
    //     // this.onLevelUp({level: 10});
    //     const {commonConversationId, _id} = this.props.route.params;
    //     actions.currentChatIdUpdate({id: _id});
    //     console.log(_id, 'the _id is as follow');
    //     //To get a new message
    //     socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
    //     socketServices.on(SOCKET_STRINGS.LEVEL_UP, this.onLevelUp);
    //     //To get acknowledment that the sent message has been received by the user.
    //     socketServices.on(
    //       SOCKET_STRINGS.ACKNOWLEDGED_SENT_BY_RECEIVER,
    //       this.acknowlegmentMessageRecieve,
    //     );
    //   }





    onReceiveMessage = data => {
        const {
            commonConversationId,
            firstName,
            profileImg,
        } = this.props.route.params.data;
        const message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
                _id: data.senderId,
                name: firstName,
                avatar: profileImg && profileImg[0].thumbnail,
            },
        };
        // console.log(data,"----------data")
        // console.log(commonConversationId,'the commonejoijoj');
        //To make sure that all the messages are seen if new message comes

        if (data.commonConversationId === commonConversationId) {
            socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
                senderId: data.senderId,
                isRead: true,
                recieverId: data.recieverId,
            });

            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }));
        }
    };





    onSend(messages = []) {
        if (String(messages[0].text).trim().length < 1) {
            return;
        }
        const { _id, commonConversationId } = this.props.route.params;
        const { userData } = this.props;
        // To send new message
        socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
            senderId: userData._id,
            recieverId: _id,
            commonConversationId,
            messageType: 'Text',
            text: messages[0].text,
        });
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }


    render() {
        const { userData } = this.props;
        // const { data } = this.props.route.params;
        // console.log(data);
        console.log(userData.accessToken);
        socketServices.initializeSocket(userData.accessToken);
        return (
            <WrapperContainer>
                <View style={[style.profileHeader, commonStyles.inline]}>
                    <TouchableOpacity style={[commonStyles.center, { paddingHorizontal: 10 }]} onPress={this.props.navigation.goBack}>
                        <Image source={imagePath.back} style={style.back} />
                    </TouchableOpacity>
                    <View>
                        <Image source={imagePath.user} style={style.profileImage} />
                    </View>
                    <Text style={[commonStyles.buttonTextWhite, { padding: 10 }]}>Name</Text>
                </View>
                <View>

                </View>



                {/* search bar */}
                <SearchBar source={imagePath.book} containerStyle={style.searchBar} />
            </WrapperContainer>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userData: state.authReducers.userData,
    }
}

export default connect(mapStateToProps)(OneToOneChatScreen)


const style = StyleSheet.create({
    profileHeader: {
        height: moderateScaleVertical(60),
        backgroundColor: colors.green,
        marginBottom: moderateScaleVertical(5),
    },
    profileImage: {
        margin: 2,
        borderRadius: 40,
        height: "80%",
        width: 60,
    },
    searchBar: {
        ...commonStyles.border,
        ...commonStyles.absoluteBottom,
        bottom: 2
    },
    back: {
        margin: 2,
        borderRadius: 40,
        height: 30,
        width: 30,
        paddingHorizontal: 10,
    }
})