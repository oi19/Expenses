import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import strings from '../localization/index'



const OrderTracker = ({ pageNum }) => {
    console.log(strings)
    return (<SafeAreaView
        style={{ justifyContent: 'space-between', margin: 26 }}    >
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
            <View style={styles.outerCircleChecked}>
                <View style={styles.innerCircleChecked} />
            </View>
            {
                pageNum === 1 ?
                    <>
                  
                        <View style={[styles.line, { backgroundColor: 'lightgrey' }]} />
                        <View style={styles.outerCircle} />
                        <View style={[styles.line, { backgroundColor: 'lightgrey' }]} />
                        <View style={styles.outerCircle} />
                    </>: pageNum === 2 ?
                        <>
                      
                            <View style={styles.line} />
                            <View style={styles.outerCircleChecked}>
                                <View style={styles.innerCircleChecked} />
                            </View>
                            <View style={[styles.line, { backgroundColor: 'lightgrey' }]} />
                            <View style={[styles.outerCircleChecked, { borderColor: 'lightgrey' }]} />
                    </>: pageNum === 3 ?
                        <>
                            
                            <View style={styles.line} />
                            <View style={styles.outerCircleChecked}>
                                <View style={styles.innerCircleChecked} />
                            </View>
                            <View style={styles.line} />
                            <View style={styles.outerCircleChecked}>
                                <View style={styles.innerCircleChecked} />
                            </View>
                        </>
                        : null}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
            <Text>{strings.confirmed}</Text>
            <Text>{strings.onTheWay}</Text>
            <Text>{strings.delivered}</Text>
           
        </View>
    </SafeAreaView>)
};

const styles = StyleSheet.create({

    outerCircleChecked: {
        height: 30, width: 30, borderWidth: 1, borderRadius: 100, borderColor: '#03AD53', justifyContent: 'center', alignItems: 'center'
    },
    innerCircleChecked: {
        height: 17, width: 17, borderWidth: 1, borderRadius: 100, borderColor: '#03AD53', backgroundColor: '#03AD53'
    },
    line: {
        flex: 1, height: 1, backgroundColor: '#03AD53'
    },
   
    outerCircle: {
        height: 30, width: 30, borderWidth: 1, borderRadius: 100, borderColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'
    }



});

export default OrderTracker;