import { StyleSheet } from "react-native";

export default StyleSheet.create({


    loginContiner:{
        position:"relative",
    },
    TextPLogin:{
        fontSize:18,
     fontWeight:"700",
     margin:10,
        top:60,
    },
    TextEmail:{
        fontSize:15,
        fontWeight:"600",
        margin:10,
           top:120,
           left:20
    },
    buttonLoginEmail:{
        top:70,
        width:"100%",
        flexDirection:"row",
    borderColor:"gray",
    borderWidth:.5,
    textAlign:"left",
        height:60,
        textAlign:'center',
        alignItems: "center",
      //  justifyContent:"flex-end",
        pading:50,
    },
    continerInput:{
        borderColor:"black",
        borderWidth:1,
        flexDirection:"row",
        top:130,
        height:70,
        width:"96%",
       marginLeft:"2%",
    },
    InputEma:{
       width:"80%",
       marginLeft:"2%",
alignItems:"flex-start",
paddingLeft:10,

justifyContent:"center",
        position:"absolute",
      
 
        top:15,
        zIndex:9
    },
    buttonSin:{

        position:"absolute",
        width:"90%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        borderWidth: 1,
      padding:10,
        alignItems: "center",
        alignSelf: "center",
    
        bottom:-270
    },
    Textvalipass:{
        fontSize:14,
        margin:10,
           top:140,
           left:20
    },
})
