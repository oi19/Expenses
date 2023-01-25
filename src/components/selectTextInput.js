import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image, I18nManager } from 'react-native'
import { verticalScale, scale } from "../helper/scaling";
import strings from '../localization/index'
import Dropdown from 'react-native-input-select';
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesome } from "@fortawesome/react-fontawesome";
import { ScrollView } from "react-native-gesture-handler";
// import { Dropdown } from 'react-native-element-dropdown';




const direction = I18nManager.isRTL ? [] : [{ rotateY: '180deg' }];

const SelectTextInput = ({ label, margin, placeholder, data, term, onSelect }) => {
    return (
        <View style={[styles.container, { marginLeft: margin ? scale(margin) : 0 }]}>
            <Text style={styles.label}>{label}</Text>
            <SelectDropdown
                renderCustomizedButtonChild={(selectedItem, index) => {
                    return (
                        <View style={styles.selectButton}>
                            {selectedItem ? (
                                <Image source={selectedItem.source} style={styles.image} />
                            ) : <Image source={data[0].source} style={styles.image} />}
                            <Text style={styles.selectText}>{selectedItem ? selectedItem.country : data[0].country}</Text>
                        </View>
                    );
                }}
                data={data}
                rowTextStyle={{ color: 'blue' }}
                style={styles.selectDropdown}
                buttonStyle={styles.selectDropdown}
                buttonTextStyle={{ alignSelf: 'center' }}
                renderCustomizedRowChild={(item) => {
                    return <View style={styles.dropDownRow}>
                        <Image style={styles.image}
                            source={item.source} />
                        <Text>{item.country}</Text>
                    </View>
                }}
                onSelect={() => { onSelect }}
                buttonTextAfterSelection={term}
                dropdownStyle={styles.dropDownMenu}
                renderDropdownIcon={isOpened => {
                    return <Image style={isOpened ? [styles.dropDownMenuArrow, { transform: [{ scaleY: -1 }] }] : styles.dropDownMenuArrow}
                        source={require('../assets/photos/Polygon2.png')} />
                }}
            />
        </View>)
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginVertical: 15,
        flex: 1,
        // backgroundColor:'red'
    },
    image: {
        resizeMode: 'contain',
        width: scale(20),
        height: verticalScale(20),
        marginRight: 7,
        // borderRadius:100
    },
    label: {
        color: '#3E4A59',
        opacity: 70,
        fontSize: 14,
        marginBottom: 10
    },
    selectDropdown: {
        borderRadius: 3,
        width: '100%',
        // backgroundColor: 'red',
        height: verticalScale(44)

    },
    dropDownRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        // backgroundColor: 'red',
        height: '100%',
        // backgroundColor: '#EFEFEF'
    },
    selectContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        // backgroundColor: 'red',
        flex: 1
    },
    selectButton: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        // backgroundColor: 'red'
    },
    // dropDownMenu: {
    //     // borderRadius:
    //     backgroundColor:  '#EFEFEF'
    // },
    selectText: {
        fontSize: 14,
        color: '#4C576E'

    },
    selectButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    dropDownMenuArrow: {
        resizeMode: 'contain',
        width: scale(13),
        height: verticalScale(13),
        marginHorizontal: 7,
    }

});

export default SelectTextInput;