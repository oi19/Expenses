import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { verticalScale } from "../helper/scaling";

const GreenButton = ({ title, onPress, color }) => {

    return (<TouchableOpacity
        onPress={onPress}
        style={[styles.buttonView, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    buttonView: {
        // width: 320,
        backgroundColor: '#03AD53',
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(44),
        borderRadius: 5,
        alignSelf: 'stretch',
        marginVertical: verticalScale(15),
        // marginTop:verticalScale(50)
        // flex: 2
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});

export default GreenButton;