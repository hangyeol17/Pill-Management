import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, Button, Alert } from 'react-native'
import Loading from './src/screens/Loading'
import MainPage from './src/screens/Main'
import Calendar from './src/screens/Calendar'

//푸시 알람


export default function App() {
  const children = [<Loading />, <MainPage />]
  const isLoading = true //true면 로딩창, false면 메인창이 뜬다.
  //return (isLoading ? (children[0]) : (children[1])) //로딩이 완료되면 메인페이지로

  return (
    <Calendar />
  ) //이건 달력 화면 출력이요. 네비게이션으로 버튼 연결 해줄사람 구함
}//파이어베이스 연결하다가 터져서 프로젝트 다시팠어요...파이어베이스 어떻게 해 어려워