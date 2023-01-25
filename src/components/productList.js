import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ScrollView, Image, TextInput, Dimensions, FlatList, I18nManager } from "react-native";
import GreenButton from "../../../components/greenButton";
import Input from "../../../components/input";
import { scale, verticalScale } from "../../helper/scaling";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getCategoriesList, getProducts, changeProductStatus, getFavList, addToCart } from "../../../redux/actions/HomeScreenAction";
import { useEffect } from "react";
import CategoryItem from "../../../components/categoryItem";
import strings from "../../localization";
import Header from "../../../components/header";
import ProductItem from "../../../components/productItem";
import HorizontalList from "../../../components/horizontalList";
import VoucherList from "../../../components/voucherList";


const ProductList = ({ ListFooterComponent, ListHeaderComponent, data }) => {
    const ListHeaderComponent = () => {
        return (
            <View >
                <CategoryItem categories={categories} navigation={navigation} renderCategories={renderCategories} />
            </View>)
    }
    const renderSection1 = ({ item }) => {
        return (
            <ProductItem
                item={item}
                navigation={() => { navigation.navigate('itemDetail') }}
                changeProductStatus={() => dispatch(changeProductStatus(item, item.like))}
                addToCart={() => dispatch(addToCart(item.id))} />)
    }
    const ListFooterComponent = () => {
        return (<>
            <HorizontalList
                navigation={() => { navigation.navigate('itemDetail') }}
                data={bestSellingProductList}
                title={strings.bestSelling}
                horizontal={true}
            />
            <VoucherList
                navigation={() => { navigation.navigate('itemDetail') }}
            />
            <HorizontalList
                navigation={() => { navigation.navigate('itemDetail') }}
                data={saleList}
                title={strings.latestDiscounts}
                horizontal={true}
            />
        </>)
    }
    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList
                style={styles.subContainer}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                key={item => item.id}
                data={data}
                renderItem={renderSection1}
                numColumns={2}
                // contentContainerStyle={productList.length > 0 ? { flexGrow: 1, alignItems: 'space-between' } : null}
                contentContainerStyle={!productList?.length && { flexGrow: 1, alignItems: 'stretch', }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default ProductList;