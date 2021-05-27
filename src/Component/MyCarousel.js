import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import {height, width} from '../styles/responsiveSize';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';









export default function MyCarousel(props) {
  const {data} = props;
  const itemSize = width * 0.6;
  const specialItemSize = (width - itemSize) / 2 - 12;
  const scrollx = useRef(new Animated.Value(0)).current;

  useEffect(() => {}, []);

  const _renderItem = ({item, index}) => {
    const inputRange = [
      (index - 2) * itemSize,
      (index - 1) * itemSize,
      index * itemSize,
    ];
    const translateY = scrollx.interpolate({
      inputRange,
      outputRange: [0, -50, 0],
    });
    if (!item.imgUrl) {
      return <View style={{width: specialItemSize}}></View>;
    }
    return (
      <View
        style={{
          width: itemSize,
          marginTop: 124,
          // flex: 1
        }}>
          <Image style={{position: 'absolute', width: width, height: height, opacity: 0.3 }} source={item.imgUrl}/>
        <Animated.View
          style={{
            marginRight: 24,
            padding: 8,
            backgroundColor: 'white',
            alignItems: 'center',
            // justifyContent: 'center',
            borderRadius: 16,
            transform: [{translateY}],
          }}>
          
          <Image
            source={item.imgUrl}
            style={{
              width: '100%',
              height: 350,
              borderRadius: 16,
              resizeMode: 'stretch',
            }}
          />
          <Text>{item.text}</Text>
          
        </Animated.View>
        <LinearGradient colors={['transparent', 'white', 'white']} style={{position: 'absolute', height, width}}/>
      </View>
    );
  };


  return (
    <>
      <Animated.FlatList
        data={[{key: 'left-spacer'}, ...data, {key: 'right-spacer'}]}
        keyExtractor={(item, index) => index}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{
        //   alignItems: 'center',
        // }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={60}
        renderItem={_renderItem}
        snapToInterval={itemSize}
        decelerationRate={0}
      />
    </>
  );
}
