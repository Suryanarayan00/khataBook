import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import Header from '../../Component/Header';
import MyCarousel from '../../Component/MyCarousel';
import MyModal from '../../Component/MyModal';
import WrapperContainer from '../../Component/WrapperContainer';
import constant from '../../constant/constant';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

export class Home extends Component {
  state = {
    textArray: ['textA', 'textB', 'textC', 'textD', 'textE', 'textF'],
    entries: [
      {imgUrl: constant.image1, text: 'surya'},
      {imgUrl: constant.image2, text: 'bhai'},
      {imgUrl: constant.image3, text: 'don'},
      {imgUrl: constant.image2, text: 'surya'},
      {imgUrl: constant.image1, text: 'surya'},
      {imgUrl: constant.image2, text: 'bhai'},
      {imgUrl: constant.image3, text: 'don'},
      {imgUrl: constant.image2, text: 'surya'},
    ],
  };
  
  
  render() {
    let {textArray, entries} = this.state;
    return (
      <WrapperContainer statusBarColor={colors.blue} bgColor={colors.blue}>
        <Header headerStyle={styles.componentHeaderStyle} />
        <View style={styles.header}>
          <View style={styles.headerTextBox}>
            <Text style={styles.name}>Hello Surya</Text>
            <Text style={styles.goodMorning}>Good Morning !</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {textArray.map((value, index) => {
              return (
                <ButtonWithLoader
                  key={index}
                  btnStyle={styles.filterButton}
                  btnText={value}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.body}>
         
         <MyCarousel data={entries}/>
         <ScrollView>
         <View style={{paddingHorizontal: 24, paddingTop: 16}}>
            <Text>Recent Articles</Text>
            <View style={styles.ArticleBox}>
              <Image style={styles.articleImage} source={constant.image2} />
              <View style={styles.articleText}>
                <Text style={styles.date}>Date</Text>
                <Text style={styles.title}>
                  Some this is what we benefit of Cycling
                </Text>
                <View style={commonStyles.inline}>
                  <Text style={styles.foot}>36 likes</Text>
                  <Text style={styles.foot}>12 comments</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 24, paddingTop: 16}}>
            <Text>Recent Articles</Text>
            <View style={styles.ArticleBox}>
              <Image style={styles.articleImage} source={constant.image2} />
              <View style={styles.articleText}>
                <Text style={styles.date}>Date</Text>
                <Text style={styles.title}>
                  Some this is what we benefit of Cycling
                </Text>
                <View style={commonStyles.inline}>
                  <Text style={styles.foot}>36 likes</Text>
                  <Text style={styles.foot}>12 comments</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 24, paddingTop: 16}}>
            <Text>Recent Articles</Text>
            <View style={styles.ArticleBox}>
              <Image style={styles.articleImage} source={constant.image2} />
              <View style={styles.articleText}>
                <Text style={styles.date}>Date</Text>
                <Text style={styles.title}>
                  Some this is what we benefit of Cycling
                </Text>
                <View style={commonStyles.inline}>
                  <Text style={styles.foot}>36 likes</Text>
                  <Text style={styles.foot}>12 comments</Text>
                </View>
              </View>
            </View>
          </View>
         </ScrollView>
        </View>

        {/* <MyModal isVisible={true} onRequestClose={()=>alert('hello')}/> */}
      </WrapperContainer>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  componentHeaderStyle: {
    paddingHorizontal: 24,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerTextBox: {},
  name: {
    fontSize: 15,
    color: colors.textGreyB,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  goodMorning: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fontFamily.futuraHeavyBt,
  },
  filterButton: {
    paddingHorizontal: 24,
    marginRight: 8,
    borderRadius: 24,
    height: 48,
  },
  body: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  ArticleBox: {
    marginTop: 8,
    flexDirection: 'row',
  },
  articleImage: {
    flex: 1,
    borderRadius: 35,
    resizeMode: 'stretch',
  },
  articleText: {
    flex: 3,
    justifyContent: 'space-around',
    paddingLeft: 16,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.textGreyB,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foot: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.textGreyB,
    marginRight: 8,
  },
});
