import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

export default function TopBar() {
    return (
        <View style={[styles.view]}>
            <Image source={require('../assets/images/pill.png')} style={[styles.mainImage]} />
            <Text style={[styles.text]}> 약먹을시간 </Text>
        </View >
    )
    //<Image source={require('../assets/images/menu.png')} style={[styles.menu]}></Image>
}

const styles = StyleSheet.create({
    mainImage: { width: 20, height: 20, marginRight: 10 },
    view: { padding: 20, backgroundColor: 'lightblue', flexDirection: 'row', alignItems: 'center' },
    text: { fontSize: 25, color: 'white', textAlign: 'center' },
    menu: { width: 20, height: 20 },
})