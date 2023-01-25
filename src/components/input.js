import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image, I18nManager, TouchableOpacity } from 'react-native'
import { verticalScale, scale } from "../helper/scaling";
import strings from '../localization/index'
import { Shadow } from 'react-native-shadow-2';


const direction = I18nManager.isRTL ? [] : [{ rotateY: '180deg' }];


const Input = ({ label, source, password, phoneNum, email, placeholder, onChange, term, pp, condition, errorMessage }) => {
    const [visible, setVisible] = useState(true)
    console.log(term)
    return (<View style={styles.container}>
        {
            !pp ?
                label ?
                    <Text style={styles.label}>{label}</Text>
                    : null
                : null
        }
        <View >
            <Shadow
                distance={pp ? 10 : 0}
                startColor={pp ? '#00000009' : null}
                radius={10}
            >
                <View style={[styles.inputContainer, { backgroundColor: pp ? 'white' : '#EEEEEE' }]}>
                    <View style={styles.textInputContainer}>
                        {source ?
                            <Image
                                source={source}
                                style={styles.image}
                            />
                            : null
                        }
                        <TextInput
                            keyboardType={phoneNum ? 'numeric' : email ? 'email-address' : 'default'}
                            maxLength={phoneNum ? 10 : 5000}
                            secureTextEntry={password ? visible : false}
                            placeholderTextColor={'#4C576E'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={I18nManager.isRTL ? [styles.input, { transform: [{ scaleX: 1 }] }] : styles.input}
                            placeholder={placeholder}
                            onChangeText={onChange}
                            value={term}
                        />
                        {
                            password ?
                                <TouchableOpacity
                                    onPress={() => { setVisible(!visible) }} >
                                    <Image
                                        style={styles.image}
                                        source={require('../assets/photos/Group14.png')} />
                                </TouchableOpacity>
                                : null
                        }
                        {
                            pp ?
                                <Text>{label}</Text>
                                : null

                        }
                    </View>
                </View>
            </Shadow>
        </View>

        <View>
            {
                condition ?
                    <Text style={{ color: 'red' }}>{errorMessage}</Text>
                    : null
            }
        </View>

    </View >)
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 15,
        flex: 2

    },
    shadowContainer: {},

    inputContainer: {
        height: verticalScale(44),
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        paddingHorizontal: 16,
        // paddingVertical: 5,
        justifyContent: 'space-between',
        // marginTop: 10,
        alignSelf: 'stretch',
        opacity: 70,
        // backgroundColor: 'red'
        // marginBottom: verticalScale(15)


    },
    textInputContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        // alignSelf: 'stretch',
        // flex: 1,
        // backgroundColor:'red'


    },
    image: {
        resizeMode: 'contain',
        width: scale(19),
        height: verticalScale(20),
        // marginHorizontal:scale(15)
    },
    input: {
        fontSize: 14,
        // alignSelf:'stretch',
        flex: 1,
        // backgroundColor: 'red'
    },
    label: {
        color: '#3E4A59',
        opacity: 70,
        fontSize: 14,
        marginBottom: 10
    },
    nonExistedLabeel: {}

});

export default Input;