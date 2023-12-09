import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Styles from "./LoginAndRegistStyle";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';  
export default function LoginAndRegist() {

  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.Hederlogin}>
      <MaterialIcons  name="settings" color="#ffff" size={30} onPress={() => navigation.navigate("ProfielScreen")}/>  
        <Text style={Styles.TextLogin}> APP SETTING</Text>
      </View>

      <View style={Styles.imageLogin}>
        <Image
          source={{
            uri: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZsZ3RlZ2g0YXlxNGs0ZnJjMmp3angzZTFzOGVvZ3NjaXd3MTh5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B6xMVJgI90SjjB0OyV/giphy.gif",
          }}
          style={{ width: "100%", height: "92%" }}
        />
      </View>
      <Pressable style={Styles.buttonLogin} onPress={() => navigation.navigate("Login")}>    
        <Text style={{fontSize:15,fontWeight:500}}>LOG IN </Text>
              
           </Pressable>
           <Pressable style={Styles.buttonRegist}onPress={() => navigation.navigate("Regist")}> 
        <Text style={{fontSize:15,fontWeight:500 ,color:"white",}}>JOIN THE CLUB </Text>
              
                </Pressable>
    </View>
  );
}
