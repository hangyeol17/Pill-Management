import React from 'react'
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Content from './Content'

import * as D from '../data'

export default function Loading() {
    return (
        <SafeAreaView style={[styles.flex]}>
            <TopBar />
            <Content />
            <BottomBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: { flex: 1, backgroundColor: 'white' },
})