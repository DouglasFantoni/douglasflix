import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Text, View, Image} from 'react-native'
import Constants from "expo-constants";

const logo = require('../../assets/img/logo.png');

const PersonStatusBar = () => {
    return(
        <View style={style.content}>
            <View style={{padding: 10, justifyContent: 'center', flexDirection: 'row',  }}>
                <Image style={style.logo} source={logo} />
            </View>

        </View>
    )
}
// http://localhost:19006/
const style = StyleSheet.create({

    logo: {
        height: 35,
        justifyContent: 'center',
        width: 120,
        // flex: 1,

    },

    content: {
        height: 75,
        paddingTop: Constants.statusBarHeight,

        // flex: '1',
        // flexDirection: 'row',
        // width: '100%',
        backgroundColor: 'black'
    }
})


export default PersonStatusBar;
