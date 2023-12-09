import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import s from "../../assets/Bootstrap/Styles.js";
import SupCategery from "../SupCategery/SupCategery.js";
import styles from "./ShopStyle.js";


export default function Shop() {



  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {

      dispatch({ type: "shopactive" })
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch({ type: "shopblur" })
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);








  const [Pressed, setPressed] = useState({ Men: 1, Woman: 0, kids: 0, });

  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef();
  const SupCategeryMemo = useMemo(() =>
    <>
      <View style={{ width: 395 }}>
        <SupCategery gender='men'/>
      </View>
      <View style={{ width: 390 }}>
        <SupCategery gender='women'></SupCategery>
      </View>

      <View style={{ width: 390 }}>
        <SupCategery gender='kids'></SupCategery>
      </View>

    </>
    , []);


  const handleScroll = (e, p) => {

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: p, animated: false });
      Animated.timing(scrollX, {
        toValue: p,
        duration: 300, // Set duration to 0 for immediate positioning
        useNativeDriver: true,
      }).start();
    }



    if (e == "Men") {
      setPressed({
        ...Pressed,
        Men: 1,
        kids: 0,
        Woman: 0,
      });
    } else if (e == "Woman") {
      setPressed({
        ...Pressed,
        Men: 0,
        kids: 0,
        Woman: 1,
      });
    } else if (e == "kids") {
      setPressed({
        ...Pressed,
        Men: 0,
        kids: 1,
        Woman: 0,
      });
    }
  };

  return (
    <SafeAreaView style={[s.mt5]}>





      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleScroll("Men", 0)}
          style={[
            { padding: 10 },
            Pressed.Men == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>Men</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => handleScroll("Woman", 197)}
          style={[
            { padding: 10 },
            Pressed.Woman == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>Woman</Text>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => handleScroll("kids", 390)}
          style={[
            { padding: 10 },
            Pressed.kids == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>kids</Text>
        </TouchableOpacity>
      </View>


      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} >


        <Animated.View
          style={{
            flexDirection: 'row',
            width: 1100,// Adjust the total width of your content
            transform: [{ translateX: Animated.multiply(scrollX, -1) }],
          }}
        >

          {SupCategeryMemo}


        </Animated.View>
      </ScrollView>

    </SafeAreaView>
  );
}
