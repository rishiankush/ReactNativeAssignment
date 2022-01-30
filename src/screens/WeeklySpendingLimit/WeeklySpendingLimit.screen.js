import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Color from '../../assets/colors/Color'
import styles from './WeeklySpendingLimit.style'
import headerStyles from '../../components/MainHeader/MainHeader.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux';
import { fetchWeeklySpendingLimit } from '../../stores/actions/user.action'

const WeeklySpendingLimit = ({navigation}) => {
    const [text, onChangeText] = useState('');
    const dispatch = useDispatch()
    const saveWeeklySpendingLimit = () => {
      dispatch(fetchWeeklySpendingLimit(text))
      navigation.pop()
    }
  return (
    <View style={{backgroundColor: Color.BLUE, flex:1}}>
        <View style={headerStyles.outerWrapper}>
          <View style={headerStyles.titleWrapper}>
            <Icon onPress={()=>navigation.goBack()} style={{width:"90%"}} name={'angle-left'} size={30} color={Color.WHITE} />
            <Image source={require('../../assets/images/Logo.png')} style={headerStyles.logo} />
          </View>
          <Text style={styles.headerTitle}>Spending limit</Text>
        </View>
        <View style={{backgroundColor: Color.WHITE, borderTopLeftRadius:20, borderTopRightRadius:20, height:"80%", paddingHorizontal:20}}>
          <View style={{flexDirection: 'row', marginTop:20, alignItems:'center'}}>
              <Image source={require('../../assets/images/Timer.png')} style={{height:20, width:20, resizeMode:'contain'}} />
              <Text style={{fontFamily: 'AvenirNextLTPro-Regular', marginLeft:10, color: Color.BLACK}}>Set a weekly debit card spending limit</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop:20, alignItems:'center', borderBottomWidth:.5, borderBottomColor: '#E5E5E5'}}>
              <View style={headerStyles.currencyView}>
                  <Text style={headerStyles.currencyText}>S$</Text>
              </View>
              <TextInput 
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  keyboardType="numeric"
                  editable={false}
              />
          </View>
          <Text style={{fontFamily: 'AvenirNextLTPro-Regular', fontSize: 13, color: Color.LIGHT_GRAY, marginTop: 20}}>Here weekly means the last 7 days - not the calendar week</Text>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
            <TouchableOpacity onPress={() => onChangeText('5,000')} style={styles.spendingLimitTabView}>
              <Text style={styles.spendingLimitTabViewText}>S$ 5,000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeText('10,000')} style={styles.spendingLimitTabView}>
              <Text style={styles.spendingLimitTabViewText}>S$ 10,000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeText('20,000')} style={styles.spendingLimitTabView}>
              <Text style={styles.spendingLimitTabViewText}>S$ 20,000</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={saveWeeklySpendingLimit} style={[styles.btnStyle,{backgroundColor: text === '' ? '#EEEEEE' : Color.COLOR_PRIMARY}]}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default WeeklySpendingLimit
