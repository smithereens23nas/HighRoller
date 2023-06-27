import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

export default function OddsComponent(props){
const { date, title, team } = props;

return(
<View>
    <View style={{ flexDirection: 'row' }}>
    <Text>{date}</Text>
    <Text>Point Spread</Text>
    <Text>Total Points</Text>
    <Text>Moneyline</Text>
    </View>
</View>
);

}

