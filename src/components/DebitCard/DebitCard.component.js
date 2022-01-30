import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from './DebitCard.style'
import Color from '../../assets/colors/Color'

const DebitCard = (props) => {
    const [showCardNumber, setShowCardNumber] = useState(true);
  return (
    <View style={props.style}>
        <View style={styles.showHideView}>
            <TouchableOpacity onPress={()=> setShowCardNumber(!showCardNumber)} activeOpacity={1} style={{flexDirection:'row', marginTop:8}}>
                <Image source={!showCardNumber ? require('../../assets/images/Hide.png') : require('../../assets/images/Show.png')} style={{height:16, width:16, resizeMode:'contain'}} />
                <Text style={styles.textShowHide}>{!showCardNumber ? 'Hide card number' : 'Show card number'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
            <View style={{marginHorizontal:20}}>
                <Image source={require('../../assets/images/AspireLogo.png')} style={styles.aspireLogo} />
                <Text style={styles.cardName}>Mark Henry</Text>
                <Text style={[styles.cardNumber, {fontSize: showCardNumber ? 22 : 14}]}>{showCardNumber ? "\u2022 \u2022 \u2022 \u2022" : '5 6 4 7'}{showCardNumber ? '   ' : '        '}<Text>{showCardNumber ? "\u2022 \u2022 \u2022 \u2022" : '3 4 1 1'}{showCardNumber ? '   ' : '        '}</Text><Text>{showCardNumber ? "\u2022 \u2022 \u2022 \u2022" : '2 4 1 3'}{showCardNumber ? '   ' : '        '}</Text><Text style={{fontSize:14}}>{'2 0 2 0'}</Text></Text>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <Text style={styles.thruText}>Thru: 12/20</Text>
                    <Text style={[styles.thruText, {marginLeft:20}]}>CVV: {!showCardNumber ? '456' : '\u273D \u273D \u273D'}</Text>
                </View>
                <Image source={require('../../assets/images/VisaLogo.png')} style={{height:20, width:59, alignSelf:'flex-end', marginTop:20, resizeMode:'contain'}} />
            </View>
        </View>
    </View>
  )
}

export default DebitCard
