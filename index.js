/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as Pill_Management } from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background', remoteMessage);
})

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        return null;
    }
    return <App />;
}

AppRegistry.registerComponent(Pill_Management, () => HeadlessCheck);
