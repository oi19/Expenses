import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { ExpItem } from "./ExpItem";
import { useDispatch } from "react-redux";
import { changeExpProp } from "../redux/actions/ExpScreenAction";
import { useNavigation } from "@react-navigation/native";


export const ExpList = ({ data }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    function renderItem({ item }) {

        const onPress = () => {
            dispatch(changeExpProp({ 'expenseTitle': item.expenseTitle, 'expenseAmount': item.expenseAmount }))
            navigation.navigate('ManageExp', { item })
        }
        return (<ExpItem
            item={item}
            onPress={onPress}
        />)
    }
    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={renderItem}
            />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})