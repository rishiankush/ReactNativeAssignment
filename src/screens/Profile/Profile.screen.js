import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../../assets/colors/Color'

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={[styles.SafeAreaView1,{backgroundColor:Color.WHITE}]} />
      <SafeAreaView style={[styles.SafeAreaView2,{backgroundColor:Color.WHITE}]}>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Icon name={'user'} size={100} color={Color.COLOR_PRIMARY} />
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert('this is Profile Screen')}
              style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is{' '}
                <Text style={{ fontWeight: 'bold', color: Color.COLOR_PRIMARY }}>
                  {' '}
                  PROFILE{' '}
                </Text>{' '}
                screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
