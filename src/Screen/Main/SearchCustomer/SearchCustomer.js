import React, { Component } from 'react';
import { Button,  View} from 'react-native';
import SearchBar from '../../../Component/SearchBar';
import WrapperContainer from '../../../Component/WrapperContainer';
import SearchCustomerCard from '../../../Component/SearchCustomerCard';
import actions from '../../../redux/actions';
import commonStyles from '../../../styles/commonStyles';




class SearchCustomer extends Component {

    state = {
        name: '',
        data: [],
    }


    // coordinates


    onChange = (key) => {
        return (value) => {
            this.setState({
                [key]: value,
            });

            if (this.timeOut) {
                clearTimeout(this.timeOut);
            }

            this.timeOut = setTimeout(() => {
                let query = `?name=${value}`;
                actions.seacrhCustomer(query).then(res => console.log(res, '@@@@seacrh Customer Data')).catch(err => console.log(err, '@@@search Customer Data'));
            }, 1000)
        };
    }


    //   search near me
    nearMe = () => {
        let coordinates = [76.7794179, 30.7333148];
        coordinates = JSON.stringify(coordinates)
        let query = `?coordinates=${coordinates}`;
        actions.seacrhCustomer(query).then(res => console.log(res, '@@@@ cordinate data')).catch(err => console.log(err))
    }

    render() {
        return (
            <WrapperContainer>
                <View style={[commonStyles.border]}>
                    <SearchBar onChangeText={this.onChange('name')} placeholder="Search customer By name" />
                </View>
                <Button onPress={this.nearMe} title='find near me' />

                <SearchCustomerCard/>

                
            </WrapperContainer>
        )
    }
}



export default SearchCustomer;
