import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native'
import { TextInput, Button, TouchableOpacity, TouchableHighlight, Alert } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

const loginPress = () => Alert.alert('login pressed', 'hi')

export default function Loading() {

    return (

        //이것도 자동로그인 되어 있으면 loading창, 아니면 로그인창으로 뜨도록
        <SafeAreaView style={[styles.flex]}>
            <View style={[styles.view]}>
                <Image source={require('../assets/images/pill.png')} style={[styles.mainImage]} />
                <Text style={[styles.text]}> 약먹을시간 </Text>
            </View>


            <View>
                <Text>아이디</Text>
                <TextInput defaultValue="" placeholder="여기를 눌러 아이디를 입력하세요"></TextInput>
                <Text>비밀번호</Text>
                <TextInput defaultValue="" placeholder="여기를 눌러 비밀번호를 입력하세요"></TextInput>
                <TouchableOpacity><Button title="로그인" onPress={loginPress}></Button></TouchableOpacity>
                <TouchableHighlight><Button title="로그인" onPress={loginPress}></Button></TouchableHighlight>

            </View>
        </SafeAreaView >
    )
    //<Image source={require('../assets/images/menu.png')} style={[styles.menu]}></Image>
}

const styles = StyleSheet.create({
    flex: {
        flex: 1, backgroundColor: 'lightblue', flexDirenctoin: 'column',
        alignItem: 'center'
    },
    view: { padding: 20, flexDirection: 'row', alignItems: 'center' },
    mainImage: { width: 20, height: 20, marginRight: 10 },
    text: { fontSize: 25, color: 'white', textAlign: 'center' },
    menu: { width: 20, height: 20 },
})