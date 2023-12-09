import React from 'react'
import { Image, Pressable, Text, View } from "react-native";
import Styles from './styelHeader.js';

export const ButtonShop = () => {
  return (

    <View>
  <Pressable style={Styles.buttonShop} onPress={""}>
        <Text >SHOP NOW</Text>
        <Image       
        source={{
            uri:"https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg",
          }}
          style={Styles.arrrowimg}

        />

      </Pressable>

    </View>
  )
}
