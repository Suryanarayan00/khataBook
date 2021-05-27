import store from "../redux/store";


let {getState} = store;
const themeColor = getState().homeReducers.themeColor;


export default {
    // themeColor: '#1493ff',
    themeColor,
    theme2Color: 'red',
    theme3Color: 'yellow',
    darkGrey: '#484848',
    btnABlue: '#306F94',
    btnBBlue: '#32A3E0',
    textBlue:"#1A76CA",
    white: '#FFFFFF',
    black:"#000000",
    textGrey:"#1E2428",
    textGreyLight:"#8F92A1",
    lightSky:"rgba(67,162,231,0.3)",
    borderLight:"rgba(30,36,40,.2)",
    textGreyOpcaity7:"rgba(30,36,40,.7)",
    bottomBarGradientA:"rgba(50,181,252,1)",
    bottomBarGradientB:"rgba(97,160,242,1)",
    transparent:'transparent',
    backgroundGrey:"#F4F7FA",
    backgroundGreyB:"#E2E6E9",
    whiteOpacity22:"rgba(255,255,255,0.22)",
    blackOpacity10:"rgba(0,0,0,0.1)",
    blackOpacity0:"rgba(0,0,0,0)",
    blackOpacity43:"rgba(0,0,0,0.43)",
    blackOpacity86:"rgba(0,0,0,0.86)",
    green:"#3B9D38",
    orange:"#E9610B",
    lightGreyBorder:"#E2E2E2",
    textGreyB:"#8E9193",
    buyBgDark:"#282828",
    whiteOpacity77:"rgba(255,255,255,0.77)",
    lightGreyBg:"#e8e8e8",
    yellow: '#ff8c1a',
    pink: '#ff9999',








    // blog color
    greenTop: '#058b80',
    greenBottom: '#026259',
    textColorDarkBlack: '#222222',
    textColorLightBlack: '#353535',
    textColorLightertBlack: '#373d3f',
    white: '#fff',
    backgroundColor: '#f5f6fc',
    backgroundColor2: '#e1e9f5',
    barStyle: 'light-content',
    blue: '#107896',
    yellow: '#fab442',



  };
  
