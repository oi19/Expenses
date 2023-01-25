import React from "react";
import { View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import { scale, verticalScale } from "../helper/scaling";

const Logo = ({source,}) => {
    
    return (<TouchableOpacity
        style={styles.imageContainer}
    >
        <Image
            source={source}
        />
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    imageContainer: {
        width: scale(36),
        height: verticalScale(36),
        backgroundColor: '#FFFFFF',
        borderColor: '#E9E9E9',
        borderWidth:1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        }
});

export default Logo