import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Image, Text, Dimensions, SafeAreaView } from "react-native";
import { verticalScale, scale } from "../helper/scaling";
import strings from "../localization";

const Header = ({ HomePage, title, navigation }) => {
    return (
        <SafeAreaView>
            {HomePage ?
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            onPress={navigation}>
                            <Image source={require('../assets/photos/Group37.png')} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>{strings.tamweeny}</Text>
                    </View>
                    <Image style={styles.image} source={require('../assets/photos/MaskGroup6.png')} />
                </View>
                :
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>}
        </SafeAreaView>



    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03AD53',
        shadowColor: '#00000029',
        width: Dimensions.get('window').width,
        height: verticalScale(55),
        paddingHorizontal: scale(16)
    },
    headerLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginTop: 12,
        paddingRight: 15,
        // backgroundColor:'red'
    },
    image: {
        marginBottom: 10,
        resizeMode: 'contain'
        // backgroundColor:'red'
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        // fontFamily:'Almarai-Bold'
    },

});
export default Header;