import { StyleSheet } from "react-native";

export default StyleSheet.create({

    imageLogin:{
position:"relative",


    },

    Hederlogin:{
        position:"absolute",
        flexDirection:"row",
        top:50,
        marginLeft:5,
zIndex:9,
    },
    TextLogin:{
        fontSize:18,
        color:"white"
    },

    buttonLogin:{
    position:"absolute",
    width:"90%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
  padding:10,
    alignItems: "center",
    alignSelf: "center",

    marginBottom: 10,
    bottom:30

},
buttonRegist:{

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

    bottom:-20
},


})