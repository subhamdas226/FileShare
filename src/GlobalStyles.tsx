import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const GlobalStyles = StyleSheet.create({
    container  : {
        flex : 1,
        backgroundColor : 'pink'
    },
    actions : {
        width : windowWidth,
        height: windowHeight,
        backgroundColor : 'orange',
        justifyContent : 'flex-start',
        alignItems  : 'center',
        // flexDirection : 'column'
    },
    lottieDimension : {
        marginVertical : 20,
        height : 300,
        width : 300,
    },
    listConatiner : {
        height : 100,
        marginHorizontal : 10,
        marginVertical : 10,
        borderWidth : 1,
        width : windowWidth - 20,
        flexDirection : 'row',
        // justifyContent : 'center',
        // alignItems : 'center',
        borderRadius  : 5
    },
    leftContainer : {
        width : '35%',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        padding : 5,
        margin  :2
    },
    rightContainer : {
        width : '63%',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        padding : 5,
        margin  :2

       
    },
    
    send : {
        width : windowWidth,
        position : 'absolute',
        bottom : 0,
        flexDirection : 'row',
        // marginHorizontal : 10,
        // backgroundColor : 'red'
    },
    sendButton : {
        width : '85%',
        // backgroundColor : 'blue'
        // marginLeft : 5
    },
    sendCount : {
        width : '10%',
        marginHorizontal : 8,
        justifyContent : 'center',
        alignItems : 'center',
    },
    lottieScanner : {
        // marginVertical : 20,
        height :400,
        width : 400,
        // position : 'absolute',
        // zIndex: 0
    },
    randomIcons : {
        zIndex : 100,
        position : 'absolute',
        // top : 500,
        // left  :windowWidth - 80
    }

})

export default GlobalStyles;