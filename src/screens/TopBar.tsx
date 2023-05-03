import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { Alert } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

const onImg = () => { Alert.alert('사용자 정보창') }
export default function TopBar() {

    return (
        <View style={[styles.safearea]}>
            <View style={[styles.view]}>
                <Image source={require('../assets/images/pill.png')} style={[styles.mainImage]} />
                <Text style={[styles.text]}> 약먹을시간 </Text>
                <TouchableHighlight onPress={onImg}>
                    <Image source={require('../assets/images/user.png')} style={[styles.userImg]} />
                </TouchableHighlight>
            </View >
        </View >
    )
    //<Image source={require('../assets/images/menu.png')} style={[styles.menu]}></Image>
    //사용자 정보 추가할 것
}

const styles = StyleSheet.create({
    safearea: {
        backgroundColor: '#B9EDDD',
    },
    view: {
        padding: 15, backgroundColor: '#87CBB9', flexDirection: 'row', alignItems: 'center',
        borderRadius: 50, margin: 20
    },
    //이거 오른쪽 끝에 붙여야함
    userImg: {
        width: 40, height: 40, marginRight: 10, borderRadius: 20,
        backgroundColor: 'white'
    },
    mainImage: { width: 20, height: 20, marginRight: 10 },
    text: { fontSize: 25, color: 'white', textAlign: 'center' },
    menu: { width: 20, height: 20 },
})