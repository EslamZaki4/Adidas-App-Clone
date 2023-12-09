import { StyleSheet } from "react-native";

export default StyleSheet.create({

    image: {
        width: "100%",
        aspectRatio: 0.5,
      },
    buttonShop: {
        backgroundColor: "white",
        height: 45,
        bottom: 15,
        position: "absolute",
        left: 50,
        width: 280,
        zIndex: 999,
        justifyContent: "center",
    
        padding: 12,
        alignSelf: "center",
     
        shadowProp: {  
          shadowOffset: {width: -2, height: 4},  
          shadowColor: '#171717',  
          shadowOpacity: 0.2,  
          shadowRadius: 3,  
        },  
      
      },
      arrowimg: {
  
        position: "absolute",
      
        bottom: 12,
    
        left: 220,
      },
      homeCategery: {
        position: "relative",
      },
      buttonCategery: {
        position: "absolute",
        zIndex: 999,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        width: 120,
        height: 35,
        top: 10,
        left: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      },
      textCat: {
        color: "white",
        fontSize: 20,
      },

      textpart: {
        color: "black",
        backgroundColor: "white",
    
        height: 45,
        bottom: 70,
        left: 50,
        position: "absolute",
        zIndex: 999,
        fontSize: 20,
    
        textAlign: "center",
    
        alignItems: "center",
        alignSelf: "center",
      },
})