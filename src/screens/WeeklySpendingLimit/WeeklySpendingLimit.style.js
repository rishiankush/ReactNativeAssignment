import { StyleSheet } from 'react-native'
import Color from '../../assets/colors/Color'

export default StyleSheet.create({
    headerTitle:{
        fontSize: 24, color: Color.WHITE, fontFamily:'AvenirNextLTPro-Bold', marginTop: 25
    },
    input: {
        height: 60,
        margin: 12,
        // borderWidth: 1,
        padding: 10,
        width: "70%",
        fontSize: 24,
        color: Color.BLACK,
        fontFamily: 'AvenirNextLTPro-Bold'
    },
    spendingLimitTabView:{
        backgroundColor: 'rgb(241,251,245)',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        width:110,
        height:40,
        borderRadius:2,
    },
    spendingLimitTabViewText:{
        color: Color.COLOR_PRIMARY,
        fontFamily: 'AvenirNext-Medium',
        fontSize: 12
    },
    btnStyle:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Color.COLOR_PRIMARY,
        width: "80%",
        padding: 20,
        borderRadius:30,
        marginBottom:20
    },
    btnText:{
        color: Color.WHITE,
        fontFamily: 'AvenirNext-Medium',
        fontSize: 16
    },
})
