import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { TouchableOpacity, Alert } from 'react-native'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

//다른 화면으로 이동
const pressMove = () => { Alert.alert('pressed') }

export default function BottomBar() {
    return (
        <View style={[styles.view]}>
            <TouchableOpacity onPress={pressMove}>
                <Image style={[styles.icon]} source={require('../assets/images/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressMove}>
                <Image style={[styles.icon]} source={require('../assets/images/calendar.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressMove}>
                <Image style={[styles.icon]} source={require('../assets/images/camera.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressMove}>
                <Image style={[styles.icon]} source={require('../assets/images/search.png')} />
            </TouchableOpacity>

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