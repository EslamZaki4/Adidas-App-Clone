import { View, Text, ScrollView, Image, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./ProfilStyle.js";
import  Icon  from 'react-native-vector-icons/FontAwesome5.js';
export default function Account() {



  const Buttoncatgery = ({ titel, text }) => {
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
        <Text style={{width:"100%",marginLeft:10}}> {text}</Text>
      </View>
    );
  };
  const ButtonLevel = ({ titel,color,colorText}) => {
    return (
      <View style={[styles.continerAccount,{backgroundColor:color}]}>
        <Pressable style={styles.buttonSupcategery} onPress={""}>
          <Text style={{ width: "85%", margin: 5, color: colorText,fontWeight:"700" }}>{titel}</Text>
         
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

  return (
    <View>
      <SafeAreaView>  

      <ScrollView>  
    <ScrollView style={{ width: "100%" }}>

   <View>
   <Text style={styles.GetStart}> LET`S GET STARTED </Text>
            <Image
              source={{
                uri: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enPH/Images/adiclub-always-on-landing-page-masthead-spli-confirmed-app-t_tcm184-841117.jpg",
              }}
              style={{ width: "100%", aspectRatio: 2.5 }}
            />


 
 
   <Text style={styles.GetStart}> WHAT`S NEW </Text>
            <Image
              source={{
                uri: "https://champions-news.com/wp-content/uploads/2022/10/%D9%82%D9%85%D9%8A%D8%B5-%D8%A8%D8%A7%D8%B1%D8%B2.jpg",
              }}
              style={{ width: "100%", aspectRatio: 1.5 }}  />

                 </View> 
           

            <Buttoncatgery titel="COMMUNITES" text="join adidas communites in your area"></Buttoncatgery>
            <Buttoncatgery titel="MY EVENTS" text="view your upcoming events"></Buttoncatgery>
            <Buttoncatgery titel="VOUCHERS" text="YOU HAVE 2 NEW VOUCHERS!"></Buttoncatgery>
            <Buttoncatgery titel="POINTES ACCTIVITY" text="See mypoints history"></Buttoncatgery>
            <Text style={styles.GetStart}> THE LEVELS</Text>

 <Text style={{width:"100%",marginLeft:10}}>Unlock new rewards at each level To level up,earn pointes by shoping,sharing,running </Text>
 <ButtonLevel  titel="LEVEL 1"color="black" colorText="white" ></ButtonLevel>
 <ButtonLevel  titel="LEVEL 2"  color="white" colorText="black"></ButtonLevel>
 <ButtonLevel  titel="LEVEL 3" color="white" colorText="black"></ButtonLevel>
 <ButtonLevel  titel="LEVEL 4" color="white" colorText="black"></ButtonLevel>
         <View style={{height:200}}></View>
         
           </ScrollView>
            </ScrollView>
            </SafeAreaView>
    </View>
  )
}