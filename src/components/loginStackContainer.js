import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'


const LoginStackContainer = () => {

    return (<ScrollView
        contentContainerStyle={styles.container}
    >
    </ScrollView>)
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        paddingVertical: 30,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginStackContainer;