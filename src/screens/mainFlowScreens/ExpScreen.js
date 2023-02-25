import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { scale, verticalScale, moderateScale } from "../../helper/scaling";
import AddButton from '../../components/AddButton'
import Layout from "../../components/layout";
import { ExpList } from "../../components/ExpList";
import { useSelector, useDispatch } from "react-redux";
import { Sum } from "../../components/Sum";
import { changeExpProp, getExpensesList } from "../../redux/actions/ExpScreenAction";
import { useIsFocused } from "@react-navigation/native";


const sum = (accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.expenseAmount)
}


const ExpScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    useEffect(() => {
        isFocused && changeExpProp('pageLoading', false)
        dispatch(getExpensesList())

    }, [isFocused])

    const pageLoading = useSelector((state) => state?.ExpScreen?.pageLoading)
    const pageError = useSelector((state) => state?.ExpScreen?.pageError)
    const expenses = [...useSelector((state) => state?.ExpScreen?.expenses)].reverse()
    const total = expenses.reduce(sum, 0)

    return <>
        <Layout>

            {
                pageLoading ?
                    <View style={styles.failedHandlerContainer}>
                        <ActivityIndicator color={'white'} size={'large'} />
                    </View>
                    : pageError ?
                        <View style={styles.failedHandlerContainer}>
                            <Text style={styles.pageErrorText}>No Result</Text>
                        </View>
                        :
                        <View style={{ flex: 1 }}>
                            <Sum total={total} title={'Total'} />
                            <ExpList data={expenses} />
                        </View>

            }
            <AddButton navigation={navigation} />
        </Layout>
    </>
};



const styles = StyleSheet.create({
    failedHandlerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageErrorText: {
        color: 'white',
        fontSize: moderateScale(20)
    }

});

export default ExpScreen