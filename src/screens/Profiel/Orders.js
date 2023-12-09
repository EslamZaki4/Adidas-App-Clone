import { View, Text } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import styles from "./ProfilStyle.js";

export default function Orders() {
  return (
    <View style={styles.orderContiner}>
         <Icon
            style={{ marginTop: 15 }}
            name="box"
            size={50}
            color="gray"
          />
         <Text style={styles.noOrder}> NO ORDER HISTORY</Text>  
         <Text style={{fontWeight:"200",marginBottom:10}}> YOU haven`t pleaced any orders yet</Text>
         <Text style={{width:"80%",fontWeight:"400"}}> Browse the shop to see what`s in store ,onc you `ve placed an order,a summary with everythinf you need will be saved for you here</Text>
    </View>
  )
}