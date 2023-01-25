import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import DropShadow from "react-native-drop-shadow";
import { Shadow } from 'react-native-shadow-2';
import { useEffect } from "react";




const ProductItem = ({ item, navigation, changeProductStatus, addToCart }) => {
    useEffect(() => {
        changeProductStatus
    },)
    return (
        <Shadow
            distance={10}
            startColor={'#00000010'}
            radius={10}        >
            <View style={styles.productItemConatiner}>
                <View style={styles.sectionOne} >
                    <TouchableOpacity
                        onPress={addToCart}>
                        <Image source={require('../assets/photos/addToCart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={changeProductStatus}>
                        <Image style={styles.likeButton} source={item.like ? require('../assets/photos/like.png') : require('../assets/photos/unlike.png')} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={navigation}
                >
                    <Image style={styles.image} source={item.source} />
                    <View style={styles.sectionTwo}>
                        <View style={{ width: 100 }}>
                            <Text style={styles.infoText}>{item.name}(1kg)</Text>
                        </View>
                        <Text style={[styles.infoText, { color: '#F9B408' }]}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Shadow>)
};

const styles = StyleSheet.create({
    productItemConatiner: {
        width: scale(154),
        // height: verticalScale(200),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        // margin:'10'
    },
    sectionOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    sectionTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        width: scale(132),
        height: verticalScale(132),

    },
    infoText: {
        fontSize: 12,
        color: '#2D2D2D'
    },
    likeButton: {
        margin: 10
    }
});


export default ProductItem;