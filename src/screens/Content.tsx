import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import { Alert } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

import Pill from '../screens/Pill'
import * as D from '../data'

const name = D.randomName()
const pills = D.makeArray(5).map(D.createRandomPill) //pill을 담는 pills array

const pressImg = () => { Alert.alert('더 커진 이미지창') }

export default function TopBar() {
    const children = pills.map((pill) => (
        <Pill key={pill.code} pill={pill} />
    ))

    return (
        <SafeAreaView style={[styles.safearea]}>

            <View style={[styles.view]}>
                <View style={[styles.circleview]}>
                    <Text>안녕하세요, {name}님</Text>
                    <View style={[styles.row]}>
                        <Image style={[styles.mainpillImage]} source={require('../assets/images/test1.jpg')} />
                        <Text>오늘의 약, 드셨나요? {name}</Text>
                    </View>
                    <Image style={[styles.mainpillImg]} source={require('../assets/images/pill.jpg')}></Image>
                </View>
            </View>

            <View style={styles.scrollview}>
                <Text>내 복용 목록</Text>
                <ScrollView style={[styles.scroll]}>
                    <View style={[styles.listview]}>
                        <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                        <View style={[styles.centerView]}>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                        <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

                    </View>

                    <View style={[styles.listview]}>
                        <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                        <View style={[styles.centerView]}>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                        <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

                    </View>

                    <View style={[styles.listview]}>
                        <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                        <View style={[styles.centerView]}>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                        <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

                    </View>

                    <View style={[styles.listview]}>
                        <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                        <View style={[styles.centerView]}>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                        <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

                    </View>


                    <View style={[styles.listview]}>
                        <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                        <View style={[styles.centerView]}>
                            <Text style={[styles.text]}>{name}</Text>
                        </View>
                        <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

                    </View>


                </ScrollView >
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safearea: { flex: 1 },
    view: {
        flex: 1, backgroundColor: '#B9EDDD',
        alignItems: 'center',
        paddingBottom: 20
    },

    circleview: {
        //border추가
        flex: 1,
        color: 'white',
        width: 270,
        height: 300,
        borderRadius: 135,
        textAlign: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    mainpillImage: { height: 80, width: 80, borderRadius: 40 },
    row: {
        flex: 1, flexDirection: 'row'
    },
    mainpillImg: {
        width: 300, flex: 1, opacity: 0.7
    },

    scrollview: { flex: 1 },
    scroll: { flexDirection: 'column', padding: 30, overflow: 'hidden' },
    listview: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5, backgroundColor: 'white'
    },
    text: { fontSize: 20, textAlign: 'center' },
    pillImage: { height: 60, width: 60, borderRadius: 30 },
    centerView: { flex: 1 },
    editImage: { width: 30, height: 30 },

})