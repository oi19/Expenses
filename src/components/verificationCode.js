import React, { useState } from "react";
import { StyleSheet, View, Text, I18nManager, TextInput } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import GreenButton from "./greenButton";


const VarificationCode = ({ onChangeText, term }) => {
    return (
        <View style={styles.digitContainer}><TextInput
            onChangeText={onChangeText}
            keyboardType='numeric'
            maxLength={1}
            style={styles.digit}>{term}</TextInput>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        width: scale(285),
        height: verticalScale(60),
        flexDirection: 'row',
        transform: [{ scaleX: I18nManager.isRTL ? 1 : 1 }],
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(20)

    },
    digitContainer: {
        width: scale(60),
        height: verticalScale(60),
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    digit: {
        color: '#0095FF',
        fontSize: 30,
        fontFamily: 'SFProDisplay-Bold',
        fontWeight: 'bold'
    },

});

export default VarificationCode;