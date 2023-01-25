import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image, I18nManager } from 'react-native'
import { verticalScale, scale } from "../src/helper/scaling";
import strings from '../src/localization/index'
import Dropdown from 'react-native-input-select';
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesome } from "@fortawesome/react-fontawesome";
// import { Dropdown } from 'react-native-element-dropdown';


// const data = [
//     { country: 'Canada', source: require('../assets/photos/Canada.png') },
//     { country: 'Egypt', source: require('../assets/photos/Egypt.png') },
//     { country: 'Ireland', source: require('../assets/photos/Ireland.png') },
//     { country: 'Australia', source: require('../assets/photos/Australia.png') }]


const direction = I18nManager.isRTL ? [] : [{ rotateY: '180deg' }];

const PhoneNumInput = ({ label, source, password }) => {
    const [term, setTerm] = useState()
    return (<View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.subContainer} >
            <View style={styles.inputContainer}>
                {source ?
                    <Image
                        source={source}
                        style={styles.image}
                    />
                    : null
                }

                <TextInput
                    secureTextEntry={password ? true : false}
                    placeholderTextColor={'#4C576E'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    // placeholder="Ahmed@example.com"
                    onChangeText={() => setTerm(term)}
                    value={term}
                />

            </View>
            <SelectDropdown
                data={data}
                rowTextStyle={{ color: 'blue' }}
                style={styles.selectDropdown}
                defaultButtonText='select a city'
                buttonStyle={styles.selectDropdown}
                buttonTextStyle={{ fontSize: 14 }}
                // renderDropdownIcon={isOpened => {
                //     return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                // }}
                renderCustomizedRowChild={(item) => {
                    return <View style={styles.dropDownRow}>
                        <Text>{item.country}</Text>
                        <Image style={styles.image}
                            source={item.source} />
                    </View>
                }}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.country;
                }}

            ></SelectDropdown>
        </View>



    </View>)
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginVertical: 15
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,


    },
    inputContainer: {
        height: verticalScale(50),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // alignSelf:'stretch'
        // backgroundColor: 'red',
        flex: 1,
        marginRight: scale(17),




    },
    image: {
        resizeMode: 'contain',
        width: scale(19),
        height: verticalScale(20),
        marginHorizontal: 7
    },
    input: {
        flex: 3,
        fontSize: 14,
        // backgroundColor:'blue'

    },
    label: {
        color: '#3E4A59',
        opacity: 70,
        fontSize: 14,
    },
    selectDropdown: {
        borderRadius: 3,
        width: scale(110),
    },
    dropDownRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10
    }

});

export default PhoneNumInput;