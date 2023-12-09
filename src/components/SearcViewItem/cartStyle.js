import { StyleSheet } from "react-native";

export default StyleSheet.create({

  textprice: {
    color: "red",
    backgroundColor: "white",
    padding: 6,
    bottom: 90,
    left: 10,
    position: "absolute",
    zIndex: 999,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  textpart: {
    color: "black",
    bottom: 25,
    left: 10,
    position: "absolute",
    zIndex: 999,
    fontSize: 16,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
  textpriceAfter: {
    color: "black",
    textDecorationLine: "line-through",
    backgroundColor: "white",
    padding: 6,
    bottom: 65,
    left: 10,
    position: "absolute",
    zIndex: 999,

    textAlign: "center",

    alignItems: "center",
    alignSelf: "center",

  },
  image: {
    width: "60%",
    aspectRatio: .8,
    height: 240
  },
  cartContiner: { position: "relative" , marginLeft : 4, height: 300, backgroundColor: "#e8ecef" },
  favorit: {
    position: "absolute",
    top: 10,
    right: 20,
    color: "black",
    zIndex : 9,
  }
})