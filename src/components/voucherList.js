import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, I18nManager, FlatList } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import strings from "../localization";
import { Shadow } from 'react-native-shadow-2';
import { addToCart, changeProductStatus } from "../redux/actions/HomeScreenAction";

import { useSelector, useDispatch } from 'react-redux';


const data = [
    { id: 1, code: '#1245AA', Type: strings.fruits },
    { id: 2, code: '#1245AB', Type: strings.vegetables },
]



const VoucherList = ({ navigation }) => {
    const dispatch = useDispatch();
    // const [selectedCategory, setSelectedCategory] = useState()
    const renderItem = ({ item }) => {
        return (
            <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                <Shadow
                    distance={12}
                    startColor={'#00000015'}
                    radius={10}   >
                    <View style={styles.sectionContainer}>

                        <View style={styles.textSection}>
                            <Text style={styles.title}>{strings.firstOrderDiscount} </Text>
                            <Text style={styles.description} numberOfLines={2}>{strings.subDiscountMsg}</Text>
                            <View style={styles.priceSection}>
                                <Text style={styles.priceNow}>{strings.code} #1245AA</Text>
                            </View>
                            <TouchableOpacity style={styles.voucherButton}>
                                <Text style={styles.voucherButtonText}>{strings.useVoucher}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsSection} >
                            <View style={styles.voucherItemFruitTypeContainer} >
                                <Text style={styles.voucherItemFruitTypeContainerText}>{strings.fruits}</Text>
                            </View>
                            <View style={styles.bottomImage}>
                                <Image style={styles.image} source={require('../assets/photos/vegetables.png')} />
                            </View>
                        </View>
                    </View>
                </Shadow>
            </View>)
    }
    return (
        <View style={styles.categoriesSection}>
            <View style={styles.allYouNeed}>
                <Text style={styles.allYouNeedText}>{strings.latestVouchers}</Text>
            </View>
            <FlatList
                key={item => item.name}
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}

            // ListHeaderComponent={ListHeaderComponent}
            />
        </View>)

};

const styles = StyleSheet.create({
    categoriesSection: {
        // width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: verticalScale(32),
    },
    categoriesList: {
        maxHeight: verticalScale(200),
        flexGrow: 1,
        paddingHorizontal: 16
    },
    imageSection: {
        justifyContent: 'space-between',
        paddingLeft: scale(20)

    },
    sectionContainer: {
        width: scale(241),
        height: verticalScale(109),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3
    },
    imageContainer: {
        width: scale(98),
        height: verticalScale(109),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A5730',
        borderRadius: 3,
        marginRight: 22
    },
    image: {
        resizeMode: 'contain',
    },
    priceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: scale(18),
    },
    textSection: {
        justifyContent: 'space-between',
        paddingVertical: verticalScale(8),
        paddingLeft: scale(18)
    },
    buttonsSection: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        // backgroundColor: 'red',
        alignSelf: 'stretch'
    },
    title: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 10,
        color: '#555555',
        flexWrap: 'wrap',
        width: scale(150),
    },
    priceNow: {
        fontSize: 10,
        color: '#F9B408'
    },
    priceBefore: {
        fontSize: 12,
        color: '#989898',
        // fontWeight:''
        textDecorationLine: 'line-through'
    },
    categoryContainer: {
        width: scale(64),
        height: verticalScale(64),
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#00000021',
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(11),
        borderWidth: 1,
        borderColor: '#00000021',
        // backgroundColor:'red'
        // padding: 2
    },
    categoryName: {
        color: '#0B0B0B',
        fontSize: 10
    },
    allYouNeed: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(12),
        // backgroundColor: 'red',
        paddingHorizontal: 16
        // marginRight:32
    },
    showAllButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: scale(95),
        height: verticalScale(30),
        borderColor: '#03AD53',
        borderWidth: 1,
        borderRadius: 5,
        // marginRight:30
    },
    showAllText: {
        color: '#03AD53',
        fontSize: 12,
        marginHorizontal: 2
    },
    allYouNeedText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,

    },
    ImageTransform: {
        transform: I18nManager.isRTL ? [{ scaleX: 1 }] : [{ scaleX: -1 }]
    },
    voucherItemFruitTypeContainer: {
        width: scale(56),
        height: verticalScale(25),
        backgroundColor: '#E2F5EB',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    voucherButton: {
        width: scale(91),
        height: verticalScale(27),
        backgroundColor: '#F9B408',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    voucherButtonText: {
        fontSize: 10,
        color: 'white'
    },
    voucherItemFruitTypeContainerText: {
        color: 'black',
        fontSize: 10
    },
    bottomImage: {
        width: scale(64),
        height: verticalScale(64),
        justifyContent: 'center',
        alignItems: 'center'
    },


});


export default VoucherList;