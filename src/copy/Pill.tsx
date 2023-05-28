import React from 'react'
import type { FC } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './Pill.style'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import moment from 'moment-with-locales-es6'

import * as D from '../data'

moment.locale('ko')

export type PillProps = {
    pill: D.Pill
}

const Pill: FC<PillProps> = ({ pill }) => {
    return (
        <View style={[styles.listview]}>
            <Image style={[styles.pillImage]} source={{ uri: pill.image }}></Image>
            <View style={[styles.centerView]}>
                <Text style={[styles.text]}>{pill.name}</Text>
            </View>


            <Image style={[styles.editImage]} source={require('../assets/images/edit.png')} />
        </View >
    )
}

export default Pill