import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import { Alert } from 'react-native'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import {Colors} from 'react-native-paper'

//아이콘 react-native 기본말고 fontawesome 쓰고싶음 훨씬 멋있
import Pill from '../screens/Pill'
import * as D from '../data'

const name = D.randomName()
const pills = D.makeArray(5).map(D.createRandomPill) //pill을 담는 pills array

const pressImg = () => { Alert.alert('더 커진 이미지창 넣을 예정^^') }

export default function TopBar() {
    const children = pills.map((pill) => ( //약 목록에 넣을 data를 일단 faker로 생성해서 배열 형성. 나중에 db로 가져와야 함.
        <Pill key={pill.code} pill={pill} />
    ))

    //여유 있으면 Text 변경 추가
    //아래 circleinsdie의 위쪽 name은 사용자 이름, 아래쪽 name은 약 이름이다. 아직 data를 수정하지 않아서 차이는 없음.
    return (
        <SafeAreaView style={[styles.safearea]}>

            <View style={[styles.view]}>
                <View style={[styles.circleview]}>
                    <View style={[styles.circleinside]}>
                        <Text>안녕하세요, {name}님</Text>
                        <View style={[styles.row]}>
                            <Image style={[styles.mainpillImage]} source={require('../assets/images/test1.jpg')} />
                            <Text>오늘의 약, 드셨나요?</Text>
                            <Text></Text>
                        </View>
                        <Image style={[styles.mainpillImg]} source={require('../assets/images/pill.jpg')}></Image>
                    </View>
                </View>
            </View>

            <View style={styles.scrollview}>
                <Text style={styles.listname}>내 복용 목록</Text>
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
        flex: 0,
        color: 'white',
        width: 270,
        height: 270,
        borderRadius: 135,
        textAlign: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
    },

    circleinside: {
        //border추가
        flex: 1,
        color: 'white',
        width: 270,
        height: 300,
        borderRadius: 140,
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 40,
    },

    mainpillImage: { height: 80, width: 80, borderRadius: 40 },
    row: {
        flex: 1, flexDirection: 'row'
    },

    mainpillImg: {
        width: 300, flex: 1, opacity: 0.7
    },

    scrollview: {
        flex: 1
    },

    scroll: {
        flexDirection: 'column', padding: 30
    },

    listname: {
        textAlign: 'center'
    },

    listview: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5, backgroundColor: 'white'
    }, //listview 마지막 child에 paddingBottom 추가

    text: { fontSize: 20, textAlign: 'center' },
    pillImage: { height: 60, width: 60, borderRadius: 30 },
    centerView: { flex: 1 },
    editImage: { width: 25, height: 25, opacity: 0.5 },

})