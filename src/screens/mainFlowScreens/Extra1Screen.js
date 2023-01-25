import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import ActionButton from 'react-native-action-button';






const Extra1Screen = ({ navigation }) => {
    return <>
        <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
            <Text>Extra1Screen</Text>
            {/* <View style={styles.floatButtonContainer}> */}
            {/* <ActionButton
                style={styles.actionButton}
                buttonColor="black"
                elevation={5}
                onPress={() => { navigation.navigate('add') }}
            /> */}
            {/* </View> */}


        </View>
    </>
};

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    floatButtonContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 80,
        // height: 80,
        // borderRadius: 100,
        // backgroundColor: 'red',
        // padding: 10,
        // position: 'absolute',
        // top: 400,
        // left: width / 2 - 40
    },
    actionButton: {
        // position: 'absolute',
        alignSelf: 'center',
        right: width / 2 - 60


    }


});

export default Extra1Screen