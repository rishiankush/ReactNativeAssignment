import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Color from './assets/colors/Color'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={'#f9f9f9'} />
        <SafeAreaView style={styles.SafeAreaView1}/>
        <SafeAreaView style={styles.SafeAreaView2}>
          <MainNavigation />
        </SafeAreaView>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  SafeAreaView1: { backgroundColor: Color.BLUE, flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: Color.WHITE },
})

export default App
