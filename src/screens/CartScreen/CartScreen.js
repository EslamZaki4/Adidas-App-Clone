import { FontAwesome } from '@expo/vector-icons';
import { FlatList, Image, Pressable, Text, View } from "react-native";
import s from "../../assets/Bootstrap/Styles.js";
import CardViewItem from '../../components/CardViewItem/CardViewItem.js';
import { useEffect, useRef, useState } from 'react';
import { GETcart } from "../../assets/Firebase/FirebaseAsyncFunction.js";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'uuid-random';
import { useNavigation } from '@react-navigation/native';
export default function CartScreen() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const allProducts = useSelector((state) => state.allProductsReducer.allProducts);
  const alternative = useSelector((state) => state.allProductsReducer.alternative);

  const cartRef = useRef(false);
  const dispatch = useDispatch();
  const [cartPrd, setCartPrd] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });




  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {

      dispatch({ type: "cartactive" })
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch({ type: "cartblur" })
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);















  //get cart
  useEffect(() => {

    if (cartRef.current) return;

    const getdata = async () => {

      try {
        const response = await GETcart();
        dispatch({ type: "getcart", payload: response });

      } catch (error) {
        //console.warn("Error dispatch cart data:", error);

      }

    }

    getdata();
    return () => cartRef.current = true;
  }, [])

  useEffect(() => {
    if (cart?.length) {


      const newArr = [];
      let total = 0;
      cart.map((item) => {

        var _prd = allProducts.find(prd => prd.id == item.id) || alternative.find(prd => prd.id == item.id)
        if (!_prd) return;//not exist storeDB
        total += _prd.price * item.qty

        newArr.push({
          ..._prd,
          size: item.size,
          qty: item.qty
        })
      })
      setCartPrd(newArr)
      setTotalPrice(total)

    }

  }, [cart])


  useEffect(() => {
    console.log('allProducts.length', allProducts.length)
  }, [])

  return (



    <View style={[s.h100, s.btnLight]}>


      <Text style={[s.letterSpacing, s.m3, s.fwBold, s.mt2, s.textSecondary]}> 1 PRODUCTS</Text>


      {cart?.length <= 0 || (cart?.length == undefined) ?
        <View style={[s.absolute, { top: "30%", left: 50, zIndex: 5, }, s.btnLight]}>




          <Image
            source={{
              uri: 'https://www.ruuhbythebrandstore.com/images/cart_is_empty.png',
            }}
            style={[s.w100, { height: 270 }]}
          />


          <Text style={[s.mt5, s.textMuted, s.fs3]}> Cart is Empty , Add Some Products to View</Text>


        </View>
        : null
      }
      <>
        <View style={{ 'height': '80%' }}>
          <FlatList
            data={cartPrd}
            keyExtractor={() => uuid()}
            renderItem={({ item, index }) =>
              <>
                <CardViewItem prd={item} />
                {index == cartPrd.length - 1 ?
                  <View style={[{ height: 50 }]}></View>
                  : null}
              </>

            }
          />


        </View>
        {/* Checkout View */}
        <View style={[s.px4, s.pt4, s.pb2, s.absolute, s.bottom2, s.btnLight, s.w100]}>


          {/* TOtal price */}
          <View style={[s.mb5, s.flexrow, s.px2]}>
            <Text style={[s.textBlack, s.fwBold]}>TOTAL  <Text style={[s.textSecondary]}>(incl , Tax)</Text></Text>
            <Text style={[s.textBlack, s.mlauto, s.fwBold, s.textDanger]}>{currency.format(totalPrice)}</Text>
          </View>


          <Pressable style={[s.btnDark, s.p3, s.flexrow]}>
            <Text style={[s.textLight, s.fwBold, s.letterSpacing]}>CHECKOUT</Text>
            <FontAwesome name="long-arrow-right" style={[s.mlauto]} size={24} color="white" />
          </Pressable>

        </View>
      </>


    </View>
  );
}
