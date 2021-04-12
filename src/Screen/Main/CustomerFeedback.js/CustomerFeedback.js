import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FeedbackCard from '../../../Component/FeedbackCard';
import ImageIcon from '../../../Component/ImageIcon';
import SearchBar from '../../../Component/SearchBar';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePath from '../../../constant/imagePath';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';
import {clearUserData} from '../../../utils/utils';

class CustomerFeedback extends Component {
  state = {
    limit: 10,
    skip: 0,
    data: [],
    isLoading: false,
    noMoreData: false,
    refreshing: false,
  };

  // get api function
  getData = () => {
    let {limit, skip, data} = this.state;

    actions
      .feedbackData({
        searchType: 'LEADERBOARD',
        limit: `${limit}`,
        skip: `${skip}`,
      })
      .then(res => {
        if (res.data.length) {
          let updatedData = [...data, ...res.data];
          this.setState({
            data: updatedData,
            isLoading: false,
            refreshing: false,
            skip: skip + 10,
          });
        } else {
          this.setState({
            noMoreData: true,
            refreshing: false,
            isLoading: false,
            skip: 0,
          });
        }
      })
      .catch(err => {
        if (err.statusCode == 401) {
          clearUserData();
        }
        this.setState({isLoading: false, refreshing: false});
      });
  };

  // on refresh function
  _onRefresh = () => {
    this.setState(
      {
        refreshing: true,
        noMoreData: false,
        data: [],
        skip: 0,
      },
      () => {
        this.getData();
      },
    );
  };

  // componentDid mount
  componentDidMount = () => {
    this.setState({isLoading: true});
    this.getData();
  };

  // function to handle load more data
  _handleLoadMore = () => {
    this.setState({isLoading: true});
    let {noMoreData} = this.state;
    if (noMoreData) {
      this.setState({isLoading: false});
      return;
    }
    this.getData();
  };

  render() {
    let {data, refreshing, isLoading} = this.state;
    return (
      <WrapperContainer>
        <View style={commonStyles.box}>
          <View
            style={[
              commonStyles.inline,
              {
                paddingVertical: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <View style={[commonStyles.inline, commonStyles.center]}>
              <ImageIcon
                size={18}
                source={imagePath.book}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
              <Text style={commonStyles.mediumFont}> A.K.Store</Text>
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
                size={20}
                source={imagePath.rupees}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
              <ImageIcon
                size={19}
                source={imagePath.contact}
                backgroundColor={colors.themeColor}
                tintColor={colors.white}
              />
            </View>
          </View>
        </View>

        <SearchBar />

        {
          <FeedbackCard
            onRefresh={this._onRefresh}
            isLoading={isLoading}
            refreshing={refreshing}
            renderFooter={this.renderFooter}
            data={data}
            _handleLoadMore={this._handleLoadMore}
          />
        }
      </WrapperContainer>
    );
  }
}

export default CustomerFeedback;
