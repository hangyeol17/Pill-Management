import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import Loading from './src/screens/Loading'
import MainPage from './src/screens/Main'

export default function App() {
  const children = [<Loading />, <MainPage />]
  const isLoading = false //true면 로딩창, false면 메인창이 뜬다.

  return (isLoading ? (children[0]) : (children[1]))
  //로딩이 완료되면 아래 메인페이지로
}
