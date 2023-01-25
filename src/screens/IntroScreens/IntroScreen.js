import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native'
import strings from "../../localization";
import { I18nManager } from 'react-native';
import { scale, verticalScale } from '../../helper/scaling'


if (I18nManager.isRTL) {
    strings.setLanguage('ar')
} else {
    strings.setLanguage('en')
}

const IntroScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => { navigation.navigate('Skip1') }, 500)
    }, [])
    // setTimeout(() => { navigation.navigate('Skip1') }, 500)

    return <TouchableOpacity
        style={styles.container}
        onPress={() => {
            navigation.navigate('Skip1')
        }} >
        <Image style={styles.image} source={require('../../assets/photos/Group1.png')} />
    </TouchableOpacity >

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03AD53',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    image: {
        width: scale(145),
        height: verticalScale(210),
        resizeMode: 'contain'
        // backgroundColor:'red'
    },
    text: {
        color: 'white'
    }

});

export default IntroScreen;