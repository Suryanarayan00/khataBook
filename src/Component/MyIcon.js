import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import colors from '../styles/colors';


export default function MyIcon(props) {
    let {container, imageStyle, source} = props;
    return (
        <View style={{...styles.container, ...container}}>
            <Image source={source} style={{...styles.image, ...imageStyle}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 3,
        borderRadius: 25,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        tintColor: colors.textGreyB,
        height: 25,
        width: 25
    },
})