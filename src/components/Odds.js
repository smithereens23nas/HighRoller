import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const OddsComponent = (props) => {
const { date, title, team } = props;

return(
<View style={{width:deviceWidth}}>
    <View style={styles.oddsTitleHeadersContainer}>
    <Text style={styles.oddsTitleHeaderDate}>{date}</Text>
    <Text style={styles.oddsTitleHeaders}>Point Spread</Text>
    <Text style={styles.oddsTitleHeaders}>Total Points</Text>
    <Text style={styles.oddsTitleHeaders}>Moneyline</Text>
    </View>
<View style={styles.oddsContainer}>
    <Text style={styles.oddsText}>PIT Pirates</Text>
    <View>
        <Text style={styles.oddsText}>+1.5</Text>
        <Text style={styles.oddsText}>-125</Text>
    </View>
        <View>
            <Text style={styles.oddsText}>O 9.5</Text>
            <Text style={styles.oddsText}>-125</Text>
        </View>
    <View>
        <Text style={styles.oddsTextMoneyline}>+140</Text>
    </View>

</View>
<View style={styles.oddsContainer}>
    <Text style={styles.oddsText}>SD Padres</Text>
    <View>
        <Text style={styles.oddsText}>-1.5</Text>
        <Text style={styles.oddsText}>+130</Text>
    </View>
        <View>
            <Text style={styles.oddsText}>U 9.5</Text>
            <Text style={styles.oddsText}>-105</Text>
        </View>
    <View>
        <Text style={styles.oddsTextMoneyline}>+140</Text>
    </View>

</View>

</View>
);

}

const styles = StyleSheet.create({

    oddsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"blue",
        padding:15,
    },
    oddsText: {
        textAlign:'center', 
        backgroundColor: 'red'
    },
    oddsTextMoneyline:{
        textAlign:'center', 
        backgroundColor: 'red',
        marginRight: 15

    },
    oddsTitleHeadersContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'gray', 
        padding:15,
        
     },
  
        oddsTitleHeaders: {
            textAlign:'center', 
            width:70,
            backgroundColor: 'orange'
        },
        oddsTitleHeaderDate: {            textAlign:'center', 
        width:70,
        backgroundColor: 'orange',
marginRight: 20

        },
    
})

export default OddsComponent;