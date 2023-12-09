import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonSearch: {
    width: "100%",
    flexDirection: "row",
    borderBlockEndColor: "gray",
    borderWidth: 1,
    height: 40,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    pading: 50,
  },

  buttonPress: {
    borderBottomColor: "Black",
    borderBottomWidth: 2,
    color: "red",
  },

  scrollView: {
    padding: 0,
    width: "100%",
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contnerProfiel: {
    left: "5%",
    top: 60,
    justifyContent: "center",
    textAlign: "center",
    height:"15%",
  flexDirection:"row"

  },
  Level: {
    fontSize: 11,
    width:50,
    margin:10,
  },
  YorName: {
    fontSize: 19,
    width:150, margin:5,
  },
  CircleNumber: {
    fontSize: 18,
    width:50,
    height:50,
    margin:14,
    fontWeight: "600",
    // borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: "center",
    textAlign: "center",
    alignItems:"center"
  },
  GetStart:{
    fontSize:25,
    fontWeight:"800",
    textAlign:"center",
    margin:15,
  },
  buttonSupcategery:{
    width:"100%",
    flexDirection:"row",
textAlign:"left",
    height:40,
    textAlign:'center',
    alignItems: "center",
 marginLeft:10,
    pading:50,
  },

  continerAccount:{
    margin:5,
    marginHorizontal:0,
    borderBottomColor:"gray",
    borderBottomWidth:.5,
    height:80,
    pading:50,
  },
  buttonin:{
    width:"95%",
    height: 50,
  marginTop:10,
    
    backgroundColor: "black",
    borderWidth: 1,
  padding:10,
    
    alignSelf: "center",
borderBlockColor:"black",
  
},
orderContiner:{
  justifyContent:"center",
  alignItems:"center",
  height:300,

},
noOrder:{
  fontSize:18,
  fontWeight:"400",
  textAlign:"center",
  margin:15,
}
});
