import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styleSuo.js";
import s from "../../assets/Bootstrap/Styles.js";
import { MaterialIcons } from '@expo/vector-icons';

const Buttoncatgery = ({ title, color }) => {
  return (
    <View>
      <Pressable style={[s.btnLight, styles.buttonSupcategery, s.pl3, s.relative]}>
        <Text style={{ width: "90%", margin: 5, color: color, fontSize: 11, fontWeight: 700, letterSpacing: 1.5 }}>{title}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={22} color="black"
          style={[s.absolute, { right: 15 }]}
        />
      </Pressable>
    </View>
  );
};

export default function BottunSupCatrgery() {
  return (
    <View>
      <Buttoncatgery title="BLACK FRIDAY SALE" color="red"></Buttoncatgery>
      <Buttoncatgery title="NEW ARRIVALES" color="black"></Buttoncatgery>
      <Buttoncatgery title="SHOES" color="black"></Buttoncatgery>
      <Buttoncatgery title="CLOTHING" color="black"></Buttoncatgery>
      <Buttoncatgery title="ACCESSORIES" color="black"></Buttoncatgery>
      <Buttoncatgery title="SHOP BY SPORT" color="black"></Buttoncatgery>
      <Buttoncatgery title="SHOP BY BRAND" color="black"></Buttoncatgery>
      <Buttoncatgery title="SALE" color="#f73333"></Buttoncatgery>
    </View>
  )
};
export function ButtonSeeAll() {
  return (<Pressable style={[styles.buttonShop,s.ml3]} >
    <Text style={{ 
      
      fontSize: 12, width: "70%", fontWeight: 600, letterSpacing: 1.2 }}>SEE ALL</Text>


    <MaterialIcons name="arrow-right-alt" size={24} color="#454545" />
  </Pressable>
  )
}
