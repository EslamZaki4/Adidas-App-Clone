import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid-random';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from "../../assets/Bootstrap/Styles.js";
import WishlistViewItem from '../../components/WishlistViewItem/WishlistViewItem.js';
export default function Wishlist() {
  const [totalPrice, setTotalPrice] = useState(0);
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const allProducts = useSelector((state) => state.allProductsReducer.allProducts);
  const alternative = useSelector((state) => state.allProductsReducer.alternative);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);


  const [favList, setFavList] = useState([]);
  const dispatch = useDispatch();
  const [activePopBox, setActivePopBox] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(false);

  const HandlePopBox = (id) => {

    setActivePopBox(!activePopBox)
    setItemToRemove(id);
  }
  const navigation = useNavigation();





  const translateYa = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (activePopBox) {
      Animated.timing(translateYa, {
        toValue: 0,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateYa, {
        toValue: -500,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [activePopBox, translateYa]);
















  const translateY = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    if (activePopBox) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 500,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [activePopBox, translateY]);




  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {

      dispatch({ type: "wishlistactive" })
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch({ type: "wishlistblur" })
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);





  useEffect(() => {

    const arr = [];
    wishlist.forEach(id => {
      const _prd = allProducts.find(prd => prd.id === id) || alternative.find(prd => prd.id === id);
      arr.push(_prd);
    });
    setFavList(arr);

  }, [wishlist])

  const removeWishlistItem = async () => {

    await dispatch({ type: "addwishlist", payload: itemToRemove });
    setActivePopBox(false);
  }

  return (

    <>


      {favList.length <= 0 ?
        <View style={[s.absolute, { top: "30%", left: 50, zIndex: 5, }, s.btnLight]}>

          <Text style={[s.fs5, s.fwBold, {
            fontSize: 30,
            textShadowColor: 'grey', // Shadow color
            textShadowOffset: { width: 1, height: 1 }, // Shadow offset
            textShadowRadius: 4,
          }]}>
            NOTHING SAVED YET

          </Text>



          <Image
            source={{
              uri: 'https://tringajewelers.com/assets/images/empty-wishlist.png',
            }}
            style={[s.w100, { height: 270 }]}
          />


          <Text style={[s.mt5, s.textMuted, s.fs3]}> WishList is Empty , Add Some Products to View</Text>


        </View>
        : null
      }
      <View style={[s.h100, s.btnLight]}>
        <Text style={[s.letterSpacing, s.m3, s.fwBold, s.mt4, s.textSecondary]}> products</Text>


        <View style={{ 'height': '100%' }}>
          <FlatList
            data={favList}
            keyExtractor={() => uuid()}
            renderItem={({ item, index }) =>
              <>
                <WishlistViewItem prd={item} HandlePopBox={HandlePopBox} />
                {index == favList.length - 1 ? <View style={[{ height: 50 }]}/>: null }
              </>
            }

          />

        </View>








      </View>



      <Animated.View
        style={{
          position: 'absolute',
          bottom: activePopBox ? '0%' : '-100%', // initially positioned off-screen
          left: 0,
          right: 0,
          zIndex: 9,
          alignItems: 'center',
          transform: [{ translateY }],
        }}
      >
        {/* Your content here */}
        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,


          }}
        >
          <View style={[s.flexrow, s.p5, s.mb5]}>

            <Text style={[s.fs6, { textTransform: 'uppercase' }, s.fwBold]}>Options</Text>

            <TouchableOpacity onPress={() => setActivePopBox(!activePopBox)} style={[s.mlauto]}>
              <AntDesign name="close" size={30} color="#454545" />
            </TouchableOpacity>

          </View>

          <View style={[s.mx5, s.pb4, { borderBottomWidth: 0.5, borderColor: 'grey' }]}>

            <View style={[s.flexrow, s.alignCenter]}>
              <SimpleLineIcons name="handbag" size={24} color="black" />
              <Text style={[s.ml4]}>Add to bag</Text>
            </View>

          </View>


          <View style={[s.mx5, s.pb4, s.mt3, { borderBottomWidth: 0.5, borderColor: 'grey' }]}>

            <View style={[s.flexrow, s.alignCenter]}>
              <MaterialCommunityIcons name="ruler" size={24} color="#454545" />
              <Text style={[s.ml4]}>SELECT SIZE</Text>
            </View>

          </View>




          <View style={[s.mx5, s.pb4, s.mt3, { borderBottomWidth: 0.5, borderColor: 'grey' }]}>

            <View style={[s.flexrow, s.alignCenter]}>
              <AntDesign name="pluscircleo" size={24} color="#454545" />
              <Text style={[s.ml4]}>Add to a new list</Text>
            </View>

          </View>



          <TouchableOpacity style={[s.mx5, s.pb4, s.mt3]} onPress={() => {
            itemToRemove ? removeWishlistItem() : null
          }}>

            <View style={[s.flexrow, s.alignCenter]}>
              <MaterialCommunityIcons name="delete-outline" size={24} color="#454545" />
              <Text style={[s.ml4]}>Remove from WihsList</Text>
            </View>

          </TouchableOpacity>










        </View>
      </Animated.View>




      {/* Black Box */}
      {activePopBox ?
        <Pressable onPress={() => { setActivePopBox(false) }} style={[s.absolute, s.btnDark, s.top0, s.w100, s.h100, { opacity: 0.5 }]}>
          <View>

          </View>
        </Pressable>

        : null
      }



    </>




  );
}
