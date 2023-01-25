import React from 'react';
import { View, TextInput, StyleSheet ,Button } from 'react-native';
// import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, setShow }) => {
    return (
        <View style={styles.backgroundStyle}>
            {/* <Feather name="search" style={styles.iconStyle} /> */}
            <TextInput
                placeholderTextColor={'grey'}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="What are you looking for ?"
            />
            <Button title='Search'
                placeholderTextColor={'black'}
                style={{ borderRadius: 15, borderWidth: 1,  color: 'black' , }}
                onPress={setShow}
                titleColor={'black'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        // backgroundColor: '#F0EEEE',
        // backgroundColor: '#1f1f1f',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 20,
        borderColor: 'black',
        borderWidth: 1
    },
    inputStyle: {
        // borderColor:'white',
        flex: 1,
        fontSize: 18,
        paddingLeft:10,
        color: 'black',
        // placeholderTextColor: 'white'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'black'
    }
});

export default SearchBar;
