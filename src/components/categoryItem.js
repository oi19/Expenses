import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, I18nManager, FlatList } from "react-native";
import { scale, verticalScale } from "../helper/scaling";
import strings from "../localization";
import { updateSearchData } from "../redux/actions/SearchScreenAction";
import { useSelector, useDispatch } from 'react-redux';



const CategoryItem = ({ source, name, navigation, categories, renderCategories, selectedCategory, searchData }) => {
    // const [selectedCategory, setSelectedCategory] = useState()
    const dispatch = useDispatch();
    return (
        <View style={styles.categoriesSection}>
            <View style={styles.allYouNeed}>
                <Text style={styles.allYouNeedText}>{strings.allYouNeed}</Text>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(updateSearchData(searchData.title, searchData.type,))
                        navigation.navigate('search')
                    }}
                    style={styles.showAllButton}>
                    <Text style={styles.showAllText}>{strings.showAll}</Text>
                    <Image style={styles.ImageTransform} source={require('../assets/photos/noun_back_3025202.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                <FlatList
                    // key={item=>item.name}
                    data={categories}
                    renderItem={renderCategories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                    contentContainerStyle={styles.categoriesList}
                />
            </View>

        </View>)

};

const styles = StyleSheet.create({
    categoriesSection: {
        // width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginBottom: verticalScale(20),
        // marginHorizontal:16
    },
    categoriesList: {
        // backgroundColor: 'red',
        flexGrow: 2,

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
        marginVertical: verticalScale(15),
        // backgroundColor: 'red',
        // marginRight:32
        paddingHorizontal: 16
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
        fontSize: 15

    },
    ImageTransform: {
        transform: I18nManager.isRTL ? [{ scaleX: 1 }] : [{ scaleX: -1 }]
    }
});


export default CategoryItem;