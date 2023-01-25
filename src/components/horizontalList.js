import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, I18nManager, FlatList } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import strings from "../localization";
import { Shadow } from 'react-native-shadow-2';
import { addToCart, changeProductStatus } from "../redux/actions/HomeScreenAction";

import { useSelector, useDispatch } from 'react-redux';
import { updateSearchData } from "../redux/actions/SearchScreenAction";



const HorizontalList = ({ navigation, data, title, horizontal, searchData }) => {
    const dispatch = useDispatch();
    const renderItem = ({ item }) => {
        return (
            <View style={{ height: 120, justifyContent: 'center', alignItems: 'center' }}>
                <Shadow
                    distance={12}
                    startColor={'#00000015'}
                    radius={10}   >
                    <View style={styles.sectionContainer}>
                        <TouchableOpacity
                            style={styles.imageSection}
                            onPress={() => navigation.navigate('itemDetail')}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={item.source} />
                            </View>
                            <View style={styles.textSection}>
                                {
                                    I18nManager.isRTL ?
                                        <Text style={styles.title}>{item.name} {strings.fresh} </Text>
                                        : <Text style={styles.title}>{strings.fresh} {item.name}</Text>
                                }
                                <Text style={styles.description} numberOfLines={2}>{strings.voucherMsg}</Text>
                                <View style={styles.priceSection}>
                                    <Text style={styles.priceNow}>50 usd</Text>
                                    {
                                        title === strings.bestSelling ?
                                            <Text style={styles.priceBefore}>70 usd</Text> : null
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.buttonsSection} >
                            <TouchableOpacity
                                onPress={() => { dispatch(changeProductStatus(item, item.like)) }}>
                                <Image style={styles.likeButton} source={item.like ? require('../assets/photos/like.png') : require('../assets/photos/unlike.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { dispatch(addToCart(item)) }}>
                                <Image source={require('../assets/photos/addToCart.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Shadow>
            </View>)
    }
    return (
        <View style={styles.categoriesSection}>

            {title ?
                <View style={styles.allYouNeed}>
                    <Text style={styles.allYouNeedText}>{title}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(updateSearchData(searchData.title, searchData.type))
                            navigation.navigate('search')
                        }
                        }
                        style={styles.showAllButton}>
                        <Text style={styles.showAllText}>{strings.showAll}</Text>
                        <Image style={styles.ImageTransform} source={require('../assets/photos/noun_back_3025202.png')} />
                    </TouchableOpacity>
                </View> : null}
            <FlatList
                key={item => item.name}
                data={data}
                renderItem={renderItem}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
                ItemSeparatorComponent={() => <View style={horizontal ? { width: 20 } : null} />}

            // ListHeaderComponent={ListHeaderComponent}
            />
        </View >)

};

const styles = StyleSheet.create({
    categoriesSection: {
        // width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
        flex: 1
        // backgroundColor:'red'
    },
    categoriesList: {
        // backgroundColor: 'red',
        // maxHeight: verticalScale(200),
        // flexGrow: 1,
        paddingHorizontal: 10
    },
    imageSection: {
        flexDirection: 'row',
        flex: 1,

    },
    sectionContainer: {
        width: scale(333),
        height: verticalScale(109),
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        // backgroundColor:'red'
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
        width: scale(75),
        height: verticalScale(75)
    },
    priceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: scale(18),

    },
    textSection: {
        justifyContent: 'center',
    },
    buttonsSection: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    description: {
        fontSize: 11,
        color: '#9B9B9B',
        flexWrap: 'wrap',
        width: scale(150),

        // backgroundColor:'red'
        // textAlign:'center'
    },
    priceNow: {
        fontSize: 12,
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
    }

});


export default HorizontalList;