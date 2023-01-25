import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import strings from "../localization";


const DrawerItem = ({ route, title, navigation, source, email }) => {

    return (
        <SafeAreaView style={styles.viewContainer}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {

                    console.log(route)
                    navigation.navigate('mainFlowStack', { screen: route })
                }} >
                <View style={title===strings.username?styles.imageContainer:[styles.imageContainer,{margin:10}]}>
                    <Image style={styles.image} source={source} />

                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>{title}</Text>
                    {title === strings.username ? <Text style={styles.email}>{email}</Text> : null}
                </View>


            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: scale(20),
        // backgroundColor:'red'

    },
    text: {
        color: '#474559',
        fontSize: 16
    },
    imageContainer: {
        // backgroundColor: 'red'
        margin: -20,
        // marginLeft:-5
        // backgroundColor: 'red'



    },
    image: {
        resizeMode: 'contain',
        // width: scale(20),
        // height:verticalScale(20)
        // backgroundColor:'red'
    },
    email: {
        color: '#344968',
        fontSize: 12
    },
    subContainer: {
        justifyContent: 'space-between'
    }
})

export default DrawerItem;