import { View, Text, Pressable, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./ProfilStyle.js";
import  Icon  from 'react-native-vector-icons/FontAwesome5.js';
import { auth } from "../../assets/Firebase/Firebase.js"


import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';

export default function Settings() {
 
  const navigation = useNavigation();


  const Buttoncatgery = ({ titel }) => {
    return (
      <View style={styles.continerAccount}>
        <Pressable style={styles.buttonSupcategery} onPress={""}>
          <Text style={{ width: "85%", margin: 5, color: "black",fontWeight:"700" }}>{titel}</Text>
         
          <Icon
            style={{ marginTop: 15 }}
            name="chevron-right"
            size={25}
            color="gray"
          />
        </Pressable>
      
      </View>
    );
  };
  const onLogout = () => {
    signOut(auth)
        .then(async () => {
            // Define the clearAsyncStorage function outside the then block
            const clearAsyncStorage = async () => {
                try {
                    await AsyncStorage.clear();
                    navigation.navigate("Home");
                    
                } catch (error) {
                    console.log('Error clearing AsyncStorage:', error);
                }
            };

          
            await clearAsyncStorage();
        })
        .catch((error) => {
            console.log(error);
        });
};


  return (
    <View>
      <SafeAreaView>  

<ScrollView>  
<ScrollView style={{ width: "100%" }}>
 <Buttoncatgery titel="PERSONAL INFORMATION" ></Buttoncatgery>
 <Buttoncatgery titel="ADDRESS BOOK" ></Buttoncatgery>
<View>   
 <Text style={styles.GetStart}> YOUR INTERESTS</Text>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRevug5A4OgeLoA8uYnauUtNlJBvVZqZ3wwA&usqp=CAU",
              }}
              style={{ width: "95%", aspectRatio: 2 }}  />

    
</View>

<Text style={styles.GetStart}> APP SETTINGS</Text>  
<Buttoncatgery titel="COUNTERY&LANGUAGE"></Buttoncatgery>
 <Buttoncatgery titel="NOTIFICATIONS" ></Buttoncatgery>
      {/* <Text>{user}</Text> */}
      <Text style={styles.GetStart}>ABOUT</Text>  
      <Buttoncatgery titel="CUSTOMER SERVICE" ></Buttoncatgery>
 <Buttoncatgery titel="TERMS AND CONDAITIONS" ></Buttoncatgery>
 <Buttoncatgery titel="PRIVACY POLICY" ></Buttoncatgery>
 <Buttoncatgery titel="RETURN INQUIRIES" ></Buttoncatgery>
<View>
   
 <Pressable style={styles.buttonin} onPress={onLogout}>
              <Text style={{ fontSize: 15, fontWeight: 500, color: "white" }}>
                LOG OUT
              </Text>
</Pressable>
</View>
 <View style={{height:300}}></View>
      </ScrollView>
            </ScrollView>
            </SafeAreaView>
    </View>
  )
}