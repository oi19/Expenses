import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { moderateScale, scale, verticalScale } from "../helper/scaling";


export const ExpItem = ({ item, onPress }) => {

    return (
        <View style={styles.conatiner}>
            <Pressable
                onPress={onPress}
                style={[styles.subContainer, ({ pressed }) => pressed && styles.pressed]}
            >
                <View style={styles.infoSection}>
                    <Text style={styles.text}>{item.expenseTitle}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{item.expenseAmount} $</Text>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginHorizontal: scale(10),
        marginVertical: verticalScale(10)
    },
    subContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 10
    },
    pressed: {
        opacity: .75
    },
    infoSection: {
        // flex: 1,
        justifyContent: 'center',
        // paddingLeft:scale(5)

    },
    text: {
        fontSize: moderateScale(12),
        color: 'white'
    },
    date: {
        opacity: .60,
        color: 'white',
        fontSize: moderateScale(10)
    },
    amountContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,

    },
    amount: {
        fontSize: moderateScale(12),
        color: 'black'
    }


})
