import React from "react";
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { verticalScale } from "../helper/scaling";



const Layout = ({ children }) => {
    return <>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1b1c1d', paddingVertical:verticalScale(10) }}>
            {children}
        </SafeAreaView>
    </>
};

const styles = StyleSheet.create({

});

export default Layout