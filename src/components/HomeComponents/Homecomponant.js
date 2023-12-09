import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ButtonShop } from "./buttonShop.js";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styelHeader.js';
import s from "../../assets/Bootstrap/Styles.js";
import { AntDesign } from '@expo/vector-icons';
export const Homecomponant = (props) => {
  return (
    <View style={[styles.homeCategery]}>
      <Pressable style={styles.buttonCategery} onPress={""}>
        <Text style={styles.textCat}>{props.name}</Text>
      </Pressable>
      <Pressable style={[styles.buttonShop, s.p0, s.px3]} >

        <View style={[s.flexrow, s.alignCenter]}>
          <Text style={[s.fwBold, { fontSize: 14 }]}>SHOP NOW</Text>
          <AntDesign style={[s.mlauto]} name="arrowright" size={25} color="black" />
        </View>



      </Pressable>
      
      <Text style={[{fontStyle : 'italic'}, styles.textpart, props.style ,s.px1 ,
      {maxWidth : 220},
      s.h0 , s.py2 , s.fwBold , s.textDark , s.fs4]}>
        {props.textHome}
      </Text>

      <Image
        source={{uri: props.imageUrl,}}
        resizeMode="cover" 
        style={[styles.image , s.w100]}
      />


    </View>
  );
};
