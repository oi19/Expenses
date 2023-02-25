import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { moderateScale, scale, verticalScale, } from '../helper/scaling'
import { useIsFocused, useNavigation } from "@react-navigation/native";

import { updateExpense, addExpenses, deleteExpense } from "../redux/actions/ExpScreenAction";
import Button from "./Button";
import { TextInputField } from "./TextInputField";


const Form = ({ confirmButton, item }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const isEditing = !!item

    const inputRef = useRef({
        Title: ' ',
        Amount: ' ',
        isValidForm: false

    })

  
    const [isSubmitting, setIsSubmitting] = useState(false)


   

    const cancelHandler = () => { navigation.goBack() }
    const confirmHandler = () => {
        const { Title, Amount, isValidForm } = inputRef.current
        if (isValidForm) {
            console.log('is valid')
            setIsSubmitting(true)
            if (isEditing) { dispatch(updateExpense({ ...item, expenseTitle: Title, expenseAmount: Amount })) }
            else { dispatch(addExpenses(Title, Amount)) }
            navigation.goBack()
        }
        else {
            console.log('not Valid')
        }

    }
    const deleteItem = () => {
        dispatch(deleteExpense(item.id))
        navigation.goBack()
    }


    return (
        <ScrollView style={{ flex: 1 }}>

            {
                !isSubmitting ?
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior='position' keyboardVerticalOffset="-999999">
                        <View style={[styles.FormContainer]}>
                            <View style={styles.inputSectionContainer}>
                                <TextInputField
                                    textInputValue={item?.expenseTitle}
                                    label={'Title'}
                                    ref={inputRef}
                                />
                                <TextInputField
                                    textInputValue={item?.expenseAmount}
                                    keyboardType='decimal-pad'
                                    label={'Amount'}
                                    ref={inputRef}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Button
                                    onPress={cancelHandler}
                                    title={'Cancel'} />
                                <Button
                                    onPress={confirmHandler}
                                    title={confirmButton}
                                />
                            </View>
                            {
                                isEditing && <Button
                                    onPress={deleteItem}
                                    title={'Delete'}
                                />
                            }
                        </View>
                    </KeyboardAvoidingView>
                    :
                    <ActivityIndicator size={'large'} color={'white'} />

            }
        </ScrollView >)
}


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const landscape = deviceWidth > deviceHeight

const styles = StyleSheet.create({
    FormContainer: {
        marginHorizontal: scale(landscape ? 40 : 20),
        paddingVertical: verticalScale(landscape ? 5 : 15),
        justifyContent: 'space-between',
    },
    formTitle: {
        marginHorizontal: scale(landscape ? 30 : 70),
        paddingVertical: verticalScale(landscape ? 5 : 10),
        paddingHorizontal: scale(landscape ? 5 : 10),
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
    },
    formTtitleText: {
        fontSize: moderateScale(15),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    inputSectionContainer: {
        marginVertical: verticalScale(landscape ? 10 : 25)
    },
    inputContainer: {
        marginVertical: verticalScale(landscape ? 10 : 15)
    },
    labels: {
        color: 'white',
        marginBottom: verticalScale(5)
    },
    textInput: {
        backgroundColor: 'grey',
        borderRadius: 30,
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(0),
    },
    pressButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: verticalScale(8),
    },
    buttonText: {
        color: 'white',
    },


})

export default Form;