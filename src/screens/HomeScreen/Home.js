

import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-vector-icons/FontAwesome5.js";
import { Homecomponant } from "../../components/HomeComponents/Homecomponant.js";
import styles from "./Styles.js";

import HomeSlice from '../HomeScreen/HomeSlice.js'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

const Home = () => {



  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {

      dispatch({ type: "homeactive" })
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch({ type: "homeblur" })
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);





  return (
    <View>

      <HomeSlice></HomeSlice>

    </View>
  );
};

export default Home;

