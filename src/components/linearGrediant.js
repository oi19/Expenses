import React from "react";
import { View, StyleSheet, Text, Image,SafeAreaView,ScrollView } from 'react-native';

const LinearGrediant = ({source, title}) => {
    
    return( <SafeAreaView style = {styles.viewContainer}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      
    </ScrollView>
    </SafeAreaView >)
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center'
    },
   


});
export default LinearGrediant;