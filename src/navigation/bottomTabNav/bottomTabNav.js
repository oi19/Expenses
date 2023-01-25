import React, { useState, useRef } from 'react';
import { Text, Pressable, Image, View, StyleSheet, TouchableOpacity, TabBar, Animated, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ExpScreen from '../../screens/mainFlowScreens/ExpScreen';
import RecentExpScreen from '../../screens/mainFlowScreens/RecentExpScreen';
import EmptyScreen from '../../screens/mainFlowScreens/EmptyScreen';
import AddExpScreen from '../../screens/mainFlowScreens/AddExpScreen'
import EditExpScreen from '../../screens/mainFlowScreens/EditExpScreen'

import { scale, verticalScale } from '../../helper/scaling';


const tabBarIcon = (label, source, focused) => {
    return (
        <View opacity={15} style={[styles.actionButtonContainer]}>
            <View android_ripple={{ color: 'blue' }} style={[styles.actionButton, focused ? styles.selectedActionButton : null]}>
                <Image style={focused ? styles.selectedImage : styles.unSelectedImage} source={source} />
                <Text style={focused ? styles.selectedTabBarLabelStyle : styles.unselectedLabelStyle}>{label}</Text>
            </View>
        </View>
    )
}

const routes = [
    { key: 'expenses', name: 'expenses', label: 'Expenses', component: ExpScreen, tabBarIcon: ({ focused }) => tabBarIcon('Expenses', require(`../../assets/photos/money.jpg`), focused) },
    { key: 'emptyScreen', name: 'emptyScreen', label: 'EmptyScreen', component: EmptyScreen, tabBarIcon: ({ focused }) => tabBarIcon('Empty', require(`../../assets/photos/saerchIcon.png`), focused) },
    { key: 'recentExp', name: 'recentExp', label: 'Recent', component: RecentExpScreen, tabBarIcon: ({ focused }) => tabBarIcon('Receent', require('../../assets/photos/Group37.png'), focused) },
    { key: 'add', name: 'add', label: 'Add', component: AddExpScreen, tabBarIcon: ({ focused }) => tabBarIcon('Add', require(`../../assets/photos/Group37.png`), focused) },
    { key: 'edit', name: 'edit', label: 'Edit', component: EditExpScreen, tabBarIcon: ({ focused }) => tabBarIcon('Edit', require(`../../assets/photos/Group37.png`), focused) }
]


const BottomTabNav = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const state = navigation.getState().routes[1].state;
    console.log(state)
    return (
        <Tab.Navigator initialRouteName='expenses'
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: styles.headerStyle,
                tabBarStyle: [styles.tabBarStyle],
                headerTintColor: 'white'
            }}>
            {
                routes.map((route, index) => {
                    return <Tab.Screen
                        key={index}
                        name={route.name}
                        component={route?.component}
                        options={{
                            tabBarItemStyle: [styles.tabBarItemStyle, state?.index === index || (!state && index === 0) ? styles.selectedTabBarItemStyle : null],
                            tabBarBadge: route.name === 'expenses' ? 3 : null,
                            tabBarBadgeStyle: state?.index === index ? styles.selectedTabBarBadgeStyle : styles.unselectedTabBarBadgeStyle,
                            tabBarShowLabel: false,
                            tabBarIcon: route.tabBarIcon,
                            title: route.label
                        }}
                    />
                })
            }
        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    screenOptions: {

    },
    headerStyle: {
        backgroundColor: '#2b2d2f',
        elevation: 5
    },
    tabBarStyle: {
        backgroundColor: '#2b2d2f',
        height: verticalScale(55),
        paddingHorizontal: scale(10),
        alignItems: 'center',
        elevation: 10,
        borderTopWidth:0
    },
    actionButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        padding: scale(5),
    },
    actionButton: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2b2d2f',
        opacity: 20,
        borderRadius: 100,
        width: scale(50),
        height: scale(50),
        padding: 5,

    },
    selectedActionButton: {
        borderWidth: .5,
        borderColor: '#2b2d2f',
    },
    selectedImage: {
        resizeMode: "contain",
        width: 20,
        height: 20,
    },
    unSelectedImage: {
        resizeMode: "contain",
        width: 15,
        height: 15
    },
    tabBarItemStyle: {
        borderRadius: 70,
        width: scale(60),
        height: scale(60),
        bottom: verticalScale(2),
        marginHorizontal: scale(4)
    },
    selectedTabBarItemStyle: {
        bottom: verticalScale(45),
        backgroundColor: '#1b1c1d',
        opacity: 1
    },
    selectedTabBarLabelStyle: {
        fontSize: 7,
        fontWeight: 'bold',
        color: '#F8F8F8'
    },
    unselectedLabelStyle: {
        fontSize: 7,
        color: '#777a7e'
    },
    unselectedTabBarBadgeStyle: {
        maxWidth: scale(13),
        maxHeight: verticalScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: verticalScale(13),
        fontSize: 8
    },
    selectedTabBarBadgeStyle: {},
    tabBarIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 50,
    },
    tabBarRingIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    selectedTabBarRing: {
        bottom: 25,
        borderWidth: 1,
        borderColor: 'lightgrey',
        elevation: 20,
        margin: 5
    },


})
export default BottomTabNav;

