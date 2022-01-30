import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native'
import Color from '../../assets/colors/Color'
import DebitCard from '../DebitCard/DebitCard.component'
import ProgressBar from 'react-native-progress/Bar';
import { useSelector } from 'react-redux';

const MainFooter = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const weeklySpendingLimit = useSelector((state) => state.userReducer.weeklySpendingLimit) 
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={{backgroundColor: Color.WHITE, borderTopLeftRadius:20, borderTopRightRadius:20, height:"78%", marginTop:"22%"}}>
        <DebitCard style={{bottom:100}} />
        <View style={{paddingHorizontal:20}}>
        {isEnabled && 
        <View>
            <View style={{flexDirection:'row', bottom: 90, marginTop:10, justifyContent:'space-between'}}>
                <Text style={{fontFamily:'AvenirNextLTPro-Regular', fontSize:13, color: Color.BLACK}}>Debit card spending limit</Text>
                <Text style={{fontFamily:'AvenirNextLTPro-Regular', fontSize:13, color: Color.COLOR_PRIMARY}}>$345 <Text style={{color: Color.LIGHT_GRAY}}>| ${weeklySpendingLimit ? weeklySpendingLimit : 5000}</Text></Text>
            </View>
            <ProgressBar progress={0.345} width={350} height={15} borderWidth={0} unfilledColor={'rgb(241,251,245)'} style={{bottom: 85, marginBottom:20}} color={Color.COLOR_PRIMARY} />
        </View>}
            <View style={{flexDirection:'row', bottom: 70}}>
                <Image source={require('../../assets/images/TopUp.png')} style={{height:32, width:32, resizeMode: 'contain'}} />
                <View style={{justifyContent:'center', marginLeft:10}}>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular'}}>Top-up account</Text>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular', opacity: 0.4, fontSize: 13, marginTop:5}}>Deposit money to your account to use with card</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('WeeklySpendingLimit')} activeOpacity={1} style={{flexDirection:'row', bottom: 40}}>
                <Image source={require('../../assets/images/WeeklySpend.png')} style={{height:32, width:32, resizeMode: 'contain'}} />
                <View style={{justifyContent:'center', marginLeft:10}}>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular'}}>Weekly spending limit</Text>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular', opacity: 0.4, fontSize: 13, marginTop:5}}>You haven’t set any spending limit on card</Text>
                </View>
                <Switch
                    style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }], bottom: 10, left:10 }}
                    trackColor={{ false: "#767577", true: Color.COLOR_PRIMARY }}
                    thumbColor={isEnabled ? Color.WHITE : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </TouchableOpacity>
            <View style={{flexDirection:'row', bottom: 10}}>
                <Image source={require('../../assets/images/FreezeCard.png')} style={{height:32, width:32, resizeMode: 'contain'}} />
                <View style={{justifyContent:'center', marginLeft:10}}>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular'}}>Freeze card</Text>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular', opacity: 0.4, fontSize: 13, marginTop:5}}>Your debit card is currently active</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:20}}>
                <Image source={require('../../assets/images/GetNewCard.png')} style={{height:32, width:32, resizeMode: 'contain'}} />
                <View style={{justifyContent:'center', marginLeft:10}}>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular'}}>Get a new card</Text>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular', opacity: 0.4, fontSize: 13, marginTop:5}}>This deactivates your current debit card</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:30}}>
                <Image source={require('../../assets/images/DeactivatedCards.png')} style={{height:32, width:32, resizeMode: 'contain'}} />
                <View style={{justifyContent:'center', marginLeft:10}}>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular'}}>Deactivated cards</Text>
                    <Text style={{fontFamily:'AvenirNextLTPro-Regular', opacity: 0.4, fontSize: 13, marginTop:5}}>Your previously deactivated cards</Text>
                </View>
            </View>
        </View>
      </View>
    )
}

export default MainFooter
