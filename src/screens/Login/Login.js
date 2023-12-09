import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Styles from "../Regist/Loginstyle"
import Icon  from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';  
export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={Styles.loginContiner}>
      <Text style={Styles.TextPLogin}>LOG IN</Text>

      <Pressable style={Styles.buttonLoginEmail}  onPress={() => navigation.navigate("Email")}>
          <Icon
            style={{ marginLeft: 10,width:"10%" }}
            name="envelope"
            size={25}
            color="black"
          />
            <Text style={{ width: "90%", margin: 5 }}>Email</Text>
        </Pressable>
    </View>
  )
}