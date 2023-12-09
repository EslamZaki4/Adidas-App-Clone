import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./cartStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import s from "../../assets/Bootstrap/Styles.js";
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
export default function CartProudact(props) {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);

  const loadingId = useSelector((state) => state.wishlistReducer.loadingId);

  const handleAddToFav = () => {

    dispatch({ type: "loadingId", payload: props.prd.id })
    dispatch({ type: "addwishlist", payload: props.prd.id })


  }


  useEffect(() => {

    dispatch({ type: "loadingId", payload: false })

  }, [wishlist])
  return (


    <View style={[s.relative, { overflow: 'hidden' }]}>



      {loadingId == props.prd.id
        ?
        <View style={[s.absolute, {
          zIndex: 9, opacity: 0.5
          , top: 10, width: '90%', height: "95%", left: '5%'
        },
          , s.btnDark
        ]}>
          <Image
            style={[s.absolute, { bottom: "5%", left: "50", zIndex: 10, width: 200, height: 100 }]}
            source={require('../../assets/Images/Pulse-0.9s-203px.gif')} // Replace with your actual local path

            resizeMode="contain"
          />
        </View>
        : null
      }




      <View style={styles.cartContiner}>

        <TouchableOpacity
          style={[s.absolute, { zIndex: 9, right: 15, top: 10, }]}
          onPress={handleAddToFav}>
          <FontAwesome

            name="heart" size={24} color={wishlist.includes(props.prd.id) ? "black" : 'grey'}
          />
        </TouchableOpacity>


        <Text style={[styles.textpart, props.style]}>{props.textHome} </Text>
        <Text style={[styles.textprice, props.style]}>{currency.format(props.price)} </Text>
        <Text style={[styles.textpriceAfter, props.style]}> {currency.format(props.prd.oldprice)} </Text>


        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={styles.image}
        />
      </View>

    </View>

  )
}