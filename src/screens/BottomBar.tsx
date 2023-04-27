import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

export default function BottomBar() {
    return (
        <View style={[styles.view]}>
            <Image style={[styles.icon]} source={require('../assets/images/home.png')}></Image>
            <Image style={[styles.icon]} source={require('../assets/images/camera.png')}></Image>
            <Image style={[styles.icon]} source={require('../assets/images/search.png')}></Image>
            <Image style={[styles.icon]} source={require('../assets/images/user.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', padding: 20, backgroundColor: 'lightblue',
        justifyContent: 'space-around'
    },
    text: { fontSize: 20, color: 'white' },
    icon: { height: 30, width: 30 },
})