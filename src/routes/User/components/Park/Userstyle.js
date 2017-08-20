import { Dimensions,StyleSheet } from 'react-native';

var width = Dimensions.get('window').width; //full width
var styles = StyleSheet.create({
    Carinfostyle: {
        top: 60,
        position: 'absolute',
        width: width
    },
    
    fontstyle:{
    	fontSize: 30,
    },

    containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },

    timerbox:{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
    },
   messageBox:{
        backgroundColor:'#ef553a',
        width:width,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    }
});

export default styles;
