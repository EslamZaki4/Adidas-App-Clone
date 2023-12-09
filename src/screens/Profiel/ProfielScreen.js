import React, { useEffect, useRef, useState } from "react";

import styles from "./ProfilStyle.js";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Account from "./Account.js";
import Settings from "./Settings.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Orders from "./Orders.js";
// import Animated from 'react-native-reanimated';

export default function ProfielScreen() {
  const [user,setUser] =useState("")
  const [Pressed, setPressed] = useState({
    Account: 1,
    Orders: 0,
    Settings: 0,
  });

  const scrollViewRef = useRef();

  const handleScroll = (e, p) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: p, animated: true });
    }

    if (e == "Account") {
      setPressed({
        ...Pressed,
        Account: 1,
        Settings: 0,
        Orders: 0,
      });
    } else if (e == "Orders") {
      setPressed({
        ...Pressed,
        Account: 0,
        Settings: 0,
        Orders: 1,
      });
    } else if (e == "Settings") {
      setPressed({
        ...Pressed,
        Account: 0,
        Settings: 1,
        Orders: 0,
      });
    }
  };

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

  return (
    <View>
      <View style={styles.contnerProfiel}>
        
          <View style={styles.CircleNumber}>
            <Text style={{fontSize:22}}>1</Text>
          </View>
          <View>
            <Text style={styles.Level}>level 1</Text>
            <Text style={styles.YorName}>YOUR NAME</Text>
            <Text>{user}</Text>
          </View>
       
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleScroll("Account", 0)}
          style={[
            { padding: 10 },
            Pressed.Account == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleScroll("Orders", 383)}
          style={[
            { padding: 10 },
            Pressed.Orders == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleScroll("Settings", 780)}
          style={[
            { padding: 10 },
            Pressed.Settings == 1 ? styles.buttonPress : null,
          ]}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} // Disable touch-based scrolling
      >
        <View
          style={{
            flexDirection: "row",
            width: 1140,
          }}
        >
          <View style={{ width: 383 }}>
            <Account></Account>
          </View>
          <View style={{ width: 380 }}>
        <Orders></Orders>
          </View>
          <View style={{ width: 380 }}>
       
          <Settings></Settings>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
