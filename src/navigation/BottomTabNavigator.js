import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

import Home from '../screens/HomeScreen/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CartScreen from '../screens/CartScreen/CartScreen';
import Wishlist from '../screens/Wishlist/Wishlist';
import Shop from '../screens/Shop/Shop';
import Radar from '../screens/OnTheRadar/Radar';
import DetailsScreen from './../screens/DetailsScreen/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import { Pressable, Text, View } from 'react-native';
import s from "../assets/Bootstrap/Styles";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import counterReducer from './../Store/Reducers/counter';
import { useSelector } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {

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



  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerRight: () => (


            <View style={[s.mr2, s.flexrow]}>

              <Pressable onPress={() => navigation.navigate("SearchScreen")}>
                <AntDesign name="search1" size={24} color="black" style={[s.mr5]} />
              </Pressable>

              <Pressable onPress={() => navigation.navigate(user == null ? "LoginAndRegist" : "ProfielScreen")}>
       
              <FontAwesome name="user-o" size={24} color="black" style={[s.mr5]} />
     </Pressable>


            </View>



          ),
        }}
      />
    </Stack.Navigator >
  );
};



const BottomTabNavigator = () => {

  const homeActive = useSelector((state) => state.counterReducer.home);
  const shopActive = useSelector((state) => state.counterReducer.shop);
  const wishlistActive = useSelector((state) => state.counterReducer.wishlist);
  const cartActive = useSelector((state) => state.counterReducer.cart);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);

  return (
    <Tab.Navigator
      screenOptions={
        {
          activeTintColor: 'black', inactiveTintColor: 'gray',
          headerShown: false, tabBarLabel: () => null,

          tabBarStyle: {
            paddingBottom: 10, // Adjust this value to set your desired padding
            paddingTop: 5, // Adjust this value to set your desired padding
          },




        }}



    >








      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarIcon: () => {

            return (
              (
                <Fontisto name="fire" size={24} color={homeActive ? 'black' : 'grey'} />
              )
            );
          },
        })}
      />


      <Tab.Screen name="SHOP" component={Shop} headerLeft={<Icon name="satellite-dish" size={25} color="gray" />}
        options={{
          tabBarIcon: () => (

            <MaterialIcons name="shop" color={shopActive ? "black" : "gray"} size={25} />


          ),
        }} />

      <Tab.Screen name="Wishlis" component={Wishlist}

        options={{
          tabBarIcon: () => (

            <View>

              <MaterialIcons name="favorite" color={wishlistActive ? 'black' : 'grey'} size={25} />



              {wishlist.length > 0 ?


                <Text

                  style={[s.absolute, { bottom: -7, right: -9, backgroundColor: wishlistActive ? 'black' : 'grey' },
                  s.fs2
                    , , s.textLight, s.px1]}>
                  {wishlist?.length}
                </Text>
                : null
              }



            </View>

          ),
        }} />

      <Tab.Screen name="Cart" component={CartScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-bag" color={cartActive ? 'black' : 'grey'} size={30} />

          ),
        }} />

      <Tab.Screen name="ON THE RADAR" component={Radar}
        options={{ tabBarIcon: () => (<Icon name="satellite-dish" size={25} color="gray" />), }} />




    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
