import React from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native'
import styles from './Home.style'
import MainHeader from '../../components/MainHeader/MainHeader.component'
import MainFooter from '../../components/MainFooter/MainFooter.component'
import Color from '../../assets/colors/Color'

const Home = ({ navigation }) => {
  return (
    <View style={{flex:1, backgroundColor: Color.BLUE}}>
      <ScrollView>
        <MainHeader />
        <MainFooter navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Home
