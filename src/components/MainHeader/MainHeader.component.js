import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from './MainHeader.style'

const MainHeader = () => {
  return (
    <>
        <View style={styles.outerWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Debit Card</Text>
            <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
          </View>
          <Text style={styles.availableBalText}>Available balance</Text>
          <View style={styles.titleWrapper}>
            <View style={styles.currencyView}>
              <Text style={styles.currencyText}>S$</Text>
            </View>
            <Text style={styles.amount}>3,000</Text>
          </View>
        </View>
    </>
  )
}

export default MainHeader
