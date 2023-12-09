import { View, Text, Image } from 'react-native'
import React from 'react'
import s from "../../assets/Bootstrap/Styles.js";
import { useNavigation } from "@react-navigation/native";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETallProducts, GETwishlist } from "../../assets/Firebase/FirebaseAsyncFunction.js";
import { getAggregateFromServer } from "firebase/firestore";
import Home from '../../screens/HomeScreen/Home.js';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Logo() {
  const allProducts = useSelector((state) => state.allProductsReducer.allProducts);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const dispatch = useDispatch();
  const effRan = useRef(false);
  const navigate = useNavigation();


  useEffect(() => {
    if (effRan.current || allProducts?.length) return;

    const getdata = async () => {
      try {
        const response = await GETallProducts();
        dispatch({ type: "getallProducts", payload: response });
      }
      catch (error) {
        //console.warn("Error fetching data:", error);
      }
      effRan.current = true;
    };
    getdata()
  }, [])




  useEffect(() => {
    console.log('from logo all prd length ', allProducts?.length)
    if (allProducts.length > 0) {
      navigate.navigate("BottomTabNavigator")
    }
  }, [allProducts])

  const effRanWishList = useRef(false);



  //get wishlist

  const [user,setUser] =useState("")

  useEffect(() => {
      const getName = async () => {
          try {
              const Name = await AsyncStorage.getItem("Email");
              setUser(Name); 
              // console.warn(Name); 
          } catch (error) {
              console.log('Error retrieving name:', error);
          }
      };
      getName();
  }, []);

  useEffect(() => {
    if (effRanWishList.current) return;
    GETwishlist({user})
      .then(res => {dispatch({ type: "getwishlist", payload: res });})
      .catch(err => console.log(err));
    return () => {effRanWishList.current = true;};
  }, []);



  return (
    <View style={[s.w100, { backgroundColor: 'black' }, s.h100, s.JustifyCenter, s.alignCenter]}>

      <Image
        style={[s.w50, s.h50]}
        source={require('../../assets/Images/logo.png')}
        resizeMode="contain" />
      <Text style={[s.textLight, s.fs6, { opacity: 0.3 }, s.absolute, s.bottom3, s.pb5]}>
        Iti Qena - Team 2</Text>

    </View>
  )
}