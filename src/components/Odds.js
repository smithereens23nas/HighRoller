import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
export default function OddsComponent(props){
const { date, title, team } = props;

return(
<View style={{width:deviceWidth, padding:25}}>
    <View style={{ flexDirection: 'row', backgroundColor: 'orange', outline: 'red solid 2px' }}>
    <Text style={{padding: 7}}>{date}</Text>
    <Text style={{padding: 7, flexDirection:'column', flex:1, flexWrap: 'wrap', textAlign:'center'}}>Point Spread</Text>
    <Text style={{padding: 7}}>Total Points</Text>
    <Text style={{padding: 7}}>Moneyline</Text>
    </View>
<View style={{flexDirection: 'row', padding:25}}>
    <Text>PIT Pirates</Text>
    <View>
        <Text>+1.5</Text>
        <Text>-125</Text>
    </View>
        <View>
            <Text>O 9.5</Text>
            <Text>-125</Text>
        </View>
    <View>
        <Text>+140</Text>
    </View>

</View>
<View style={{flexDirection: 'row'}}>
    <Text>SD Padres</Text>
    <View>
        <Text>-1.5</Text>
        <Text>+130</Text>
    </View>
        <View>
            <Text>U 9.5</Text>
            <Text>-105</Text>
        </View>
    <View>
        <Text>+140</Text>
    </View>

</View>

</View>
);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    }})