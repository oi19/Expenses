import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AddButton from "../../components/AddButton";
import Layout from "../../components/layout";
import { Sum } from "../../components/Sum";
import { ExpList } from "../../components/ExpList";

import { useSelector } from "react-redux";


const RecentExpScreen = ({ navigation }) => {

    const expenses = [...useSelector((state) => state?.ExpScreen?.expenses)].reverse()
    // const receentExpenses = expenses.filter((expense) => {
    //     const today = new Date()
    //     // const 7daysAgo= getDateMinus
    // })
    

    return <>
        <Layout>
            <Sum title={'Last 7 Days'} />
            <ExpList />
            <AddButton navigation={navigation} />
        </Layout>
    </>
};



const styles = StyleSheet.create({

});

export default RecentExpScreen