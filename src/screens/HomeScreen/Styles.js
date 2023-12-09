import { StyleSheet } from "react-native";

export default StyleSheet.create({

  buttonHeader: {
    padding: "3%",
    width: 100,
    height: 30,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 5,
    
  },

  TapButton: {
    width: "100%",
    flexDirection: "row",
    padding: 10,

  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttContiner: {
    marginHorizontal: 5,
    borderBlockColor: "black",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    opacity: .6,
    fontWeight: 700,
    
  },


  buttContinerMen: {
    padding: 10,
    borderBlockColor: "black",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    width: 120,
    justifyContent: "center",


  }

});
