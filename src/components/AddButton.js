import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ActionButton from "react-native-action-button";
import { verticalScale, scale } from "../helper/scaling";

const AddButton = ({ navigation }) => {
    function onPress() {
        navigation.navigate('ManageExp')
    }
    return (
        <ActionButton
            style={styles.actionButton}
            buttonColor="black"
            elevation={5}
            onPress={onPress}
        />
    )

};

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({

    actionButton: {
        alignSelf: 'center',
        overflow: 'hidden',
        bottom: verticalScale(-15),
        right: scale(-10)
    }
});


export default AddButton;