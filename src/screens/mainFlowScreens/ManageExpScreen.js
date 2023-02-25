import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../components/layout'
import Form from '../../components/Form'



const ManageExpScreen = ({ route, navigation }) => {

    const item = route?.params?.item
    const isEditing = !!item

    useEffect(() => {
        navigation.setOptions({
            title: !!item ? 'Edit Expense' : 'Add Expense',
        })
    }, [isEditing, navigation])



    return (
        <Layout>
            <Form
                confirmButton={isEditing ? 'Update' : 'Add'}
                item={item}
            />
        </Layout>
    )
};

const styles = StyleSheet.create({

});

export default ManageExpScreen