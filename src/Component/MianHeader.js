import React from 'react';
import { Text, TextInput, View } from 'react-native';
import commonStyles from '../styles/commonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function MainHeader() {
    return (
        <View style={[commonStyles.inline, commonStyles.borderBottom, {width: '100%', padding: 10}]}>
            <View style={[commonStyles.inline, commonStyles.border]}>
                <Ionicons name='home' size={15} />
                <TextInput placeholder='Search 70 Sports 5000 Products' />
            </View>
            <Ionicons name='home' size={15} style={{ marginLeft: 5 }} />
        </View>
    )
}