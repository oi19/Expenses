import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from "../helper/scaling";

const Button = ({ title, onPress, color, style, textStyle }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.buttonView, { backgroundColor: title === 'Delete' ? 'red' : null }, styles.pressButton]}>
                {
                    title === 'Deleting' ?
                        <Image source={require('../assets/photos/download.png')} />
                        :
                        <Text style={styles.buttonText}>
                            {title}
                        </Text>
                }

            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        marginHorizontal: scale(5)
    },
    buttonView: {
        backgroundColor: '#03AD53',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: verticalScale(10),
    },
    buttonText: {
        color: 'white',
        fontSize: moderateScale(20),
        flex: 1
    },
    pressButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: verticalScale(8),
    },
    buttonText: {
        color: 'white',
    },


});

export default Button;