import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

import * as D from '../data'

const name = D.randomName()
const avatarUrl = D.randomAvatarUrl(name)

export default function TopBar() {
    return (
        <SafeAreaView style={[styles.safearea]}>
            <View style={[styles.view]}>
                <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                <View style={[styles.centerView]}>
                    <Text style={[styles.text]}>{name}</Text>
                </View>
                <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

            </View>

            <View style={[styles.view]}>
                <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                <View style={[styles.centerView]}>
                    <Text style={[styles.text]}>{name}</Text>
                </View>
                <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

            </View>

            <View style={[styles.view]}>
                <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                <View style={[styles.centerView]}>
                    <Text style={[styles.text]}>{name}</Text>
                </View>
                <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />

            </View>

            <View style={[styles.view]}>
                <Image style={[styles.pillImage]} source={require('../assets/images/test1.jpg')} />
                <View style={[styles.centerView]}>
                    <Text style={[styles.text]}>{name}</Text>
                </View>
                <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safearea: { flex: 1, flexDirection: 'column', padding: 30 },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, padding: 5, height: '100%', backgroundColor: 'white'
    },
    text: { fontSize: 20, textAlign: 'center' },
    pillImage: { height: 60, width: 60, borderRadius: 30 },
    centerView: { flex: 1 },
    editImage: { width: 40, height: 40 },

})