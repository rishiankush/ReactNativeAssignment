import { StyleSheet } from 'react-native'
import Color from '../../assets/colors/Color'

export default StyleSheet.create({
    textShowHide:{
        fontFamily: 'AvenirNext-Medium',
        color: Color.COLOR_PRIMARY,
        fontSize: 12,
        marginLeft:5
    },
    showHideView:{width:151, height:44, backgroundColor: Color.WHITE, alignItems:'center', borderRadius:5,alignSelf:'flex-end', marginRight:20, top:10},
    cardContainer:{backgroundColor: Color.COLOR_PRIMARY, height: 366, height: 220, marginHorizontal:20, borderRadius:10},
    aspireLogo: {height:21, width:74, alignSelf:'flex-end', marginTop:20},
    cardName:{fontFamily:'AvenirNextLTPro-Bold', fontSize:22, color: Color.WHITE, marginTop: 20},
    cardNumber:{
        fontFamily: 'AvenirNext-Medium',
        marginTop:25,
        color: Color.WHITE
    },
    thruText:{
        fontFamily: 'AvenirNext-Medium',
        fontSize:13,
        color: Color.WHITE,
    }
})
