import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text, Button, TouchableOpacity } from 'react-native'
import { Dimensions } from "react-native";
import strings from "../../localization";
import GreenButton from "../../components/greenButton";
import { verticalScale } from "../../helper/scaling";
// import * as fonts from'../../../assets/fonts/'

const skipObjects = [
    {
        source: require('../../assets/photos/MaskGroup27.png'),
        mainMsg: strings.skip1Msg,
        minorMsg: strings.skip1BelowMsg

    }, {
        source: require('../../assets/photos/Group28747.png'),
        mainMsg: strings.skip2Msg,
        minorMsg: strings.skip2BelowMsg
    }, {
        source: require('../../assets/photos/MaskGroup28.png'),
        mainMsg: strings.skip3Msg,
        minorMsg: strings.skip2BelowMsg
    }
]
const SkipScreen1 = ({ navigation }) => {

    const [selectedPhase, setSelectedPhase] = useState(0)
    return <SafeAreaView style={{
        flex: 1, backgroundColor: '#FFFFFF'
    }}>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.skipButtonContainer}>
                <Text style={styles.skipButton}
                    onPress={() => { navigation.navigate('bottomTab') }}
                >{strings.skip}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    if (selectedPhase !== 2) {
                        setSelectedPhase(selectedPhase + 1)
                    } else {
                        navigation.navigate('mainFlowStack')
                    }
                }}>
                <Image
                    source={skipObjects[selectedPhase].source}
                    style={styles.image} />
            </TouchableOpacity>
            <View style={styles.textsContainer}>
                <View style={styles.msgContainer}>
                    <Text style={styles.mainMsg}>{skipObjects[selectedPhase].mainMsg}</Text>
                    <Text style={styles.minorMsg}>{skipObjects[selectedPhase].minorMsg}</Text>
                </View>
                <GreenButton color='#03AD53' title={strings.registerNow} onPress={() => { navigation.navigate('loginStack', { screen: 'signup' }) }} />
                <Text>
                    {strings.welcomBackMsg}<Text style={{ color: '#03AD53' }} onPress={() => { navigation.navigate('loginStack', { screen: 'login' }) }}> {strings.login}</Text>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>



}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        height: 417,
        width: Dimensions.get('window').width,
    },
    skipButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 89
    },
    skipButton: {
        marginLeft: 19,
        marginTop: 34,

    },
    textsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 44,
        height: verticalScale(218),
        paddingHorizontal: 25

    },
    msgContainer: {
        alignItems: 'center',
    },
    buttonAreaContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainMsg: {
        fontSize: 22,
        fontFamily: '',
        fontWeight: 'bold',
        color: '#020313',


    },
    minorMsg: {
        fontSize: 14,
        color: '#091545',
        opacity: 74
    }


});

export default SkipScreen1;