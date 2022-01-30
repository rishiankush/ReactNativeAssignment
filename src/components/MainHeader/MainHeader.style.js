import { StyleSheet } from 'react-native'
import Color from '../../assets/colors/Color'

export default StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: Color.BLUE,
    paddingHorizontal: 20
  },
  titleWrapper:{
    flexDirection:'row', 
    marginTop:20
  },
  logo:{
    height:25, 
    width:25, 
    resizeMode: 'contain',
    bottom:10
  },
  titleText: { fontSize: 24, color: Color.WHITE, fontFamily:'AvenirNextLTPro-Bold', width:"90%" },
  availableBalText: { color: Color.WHITE, marginTop:25, fontFamily:'AvenirNext-Medium' },
  currencyView:{
    backgroundColor: Color.COLOR_PRIMARY,
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:22,
    borderRadius:4,
  },
  currencyText:{color:Color.WHITE, fontSize: 12, fontFamily:'AvenirNextLTPro-Bold'},
  amount: { fontSize: 24, color: Color.WHITE, marginLeft:10, fontFamily:'AvenirNextLTPro-Bold' },
})
