import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import TopBar from './src/screens/TopBar'
import BottomBar from './src/screens/BottomBar'
import Content from './src/screens/Content'

export default function App() {
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