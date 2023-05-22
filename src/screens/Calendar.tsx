import React from 'react'
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Schedule from './Schedule'

import * as D from '../data'

//버튼에 의한 화면전환을 아직 할 수 없음. main을 실행하면 content창, calendar을 실행하면 schedule 창. 이런식으로 일단 만들어놓음 ㅠ
//어떻게 하는지 아는사람
export default function Calendar() {
    return (
        <SafeAreaView style={[styles.flex]}>
            <Schedule />
            <BottomBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: { flex: 1, backgroundColor: 'white' },
})