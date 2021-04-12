import React, {Component} from 'react';
import {Button, View, TouchableOpacity} from 'react-native';
import SearchBar from '../../../Component/SearchBar';
import WrapperContainer from '../../../Component/WrapperContainer';
import SearchCustomerCard from '../../../Component/SearchCustomerCard';
import actions from '../../../redux/actions';
import commonStyles from '../../../styles/commonStyles';
import GradientButton from '../../../Component/GradientButton';

class SearchCustomer extends Component {
  state = {
    name: '',
    data: [],
    isLoading: false,
  };

  getData = query => {
    this.setState({isLoading: true, data: []}, () => {
      actions
        .seacrhCustomer(query)
        .then(res => {
          this.setState({data: res.data, isLoading: false});
        })
        .catch(err => this.setState({isLoading: false}));
    });
  };

  // coordinates

  onChange = key => {
    return value => {
      this.setState({
        [key]: value,
      });

      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }

      this.timeOut = setTimeout(() => {
        let query = `?name=${value}`;
        this.getData(query);
      }, 1000);
    };
  };

  //   search near me
  nearMe = () => {
    let coordinates = [76.7794179, 30.7333148];
    coordinates = JSON.stringify(coordinates);
    let query = `?coordinates=${coordinates}`;
    this.getData(query);
  };

  render() {
    let {data, isLoading} = this.state;
    return (
      <WrapperContainer>
        <View style={[commonStyles.border]}>
          <SearchBar
            onChangeText={this.onChange('name')}
            placeholder="Search customer By name"
          />
        </View>
        <GradientButton btnText="find near me" onPress={this.nearMe} />

        {<SearchCustomerCard data={data} isLoading={isLoading} />}
      </WrapperContainer>
    );
  }
}

export default SearchCustomer;
