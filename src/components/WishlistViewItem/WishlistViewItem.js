import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import s from "../../assets/Bootstrap/Styles.js";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function WishlistViewItem({ prd, HandlePopBox }) {

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (



    <View style={[s.flexrow, { "height": 180, "backgroundColor": '#f0f1f4' }, , s.p2, s.myHalf]}>

      <TouchableOpacity style={[s.col2Half]}>
        <Image style={[s.h100]} source={{ uri: prd.imgurl[0] }} resizeMode="cover" />
      </TouchableOpacity>


      {/* card info  */}
      <TouchableOpacity style={[s.col3Half,]}>


        <View style={[s.pl3]}>

          {/* price */}
          <View style={[s.flexrow]}>
            <Text style={[s.btnWhite, s.mt3, s.fs2Half, s.p1, s.w50, s.textCenter, s.textDanger]} >{currency.format(prd.price)}</Text>
            <Text style={[s.btnWhite, s.mt3, s.fs2Half, s.p1, s.w50, s.textCenter, s.lineThrough]} numberOfLines={1} >{currency.format(prd.oldprice)}</Text>
          </View>

          {/* discount btn */}
          {prd.oldprice > 0 &&
            <Text style={[s.textLight, s.w25, s.textCenter, s.p1, s.my1
              , { "backgroundColor": '#c43622' }
            ]}>

              {Math.floor((prd.price / prd.oldprice) * 100)} %
            </Text>
          }

          <Text style={[s.fwBold, s.fs3]} numberOfLines={1} >{prd.name}</Text>
          <View style={[s.flexrow, s.mtHalf]}>
          </View>
        </View>

        <View style={[s.flexrow, s.JustifyStart, s.ml4]}>
          <Pressable

            style={[s.p1, s.flexrow, s.w50, s.mt2, s.border, s.justifyBetween, s.px2, s.w85, s.mt5,]}
            onPress={() => {
              dispatch({ type: "addcart", payload: {id:prd.id , size : prd.availablesize[0] , qty : 1} })
            }}>

              
            <Text style={[s.fwBold, s.letterSpacing, s.fs2]} numberOfLines={1}>ADD TO BAG</Text>
            <FontAwesome name="shopping-bag" size={18} style={[s.ml4]} color="black" />
          </Pressable>
        </View>

      </TouchableOpacity>




      {/* 3 dots */}

      <View style={[s.JustifyCenter, s.colHalf, s.alignEnd, s.pr2,
      { "width": '20px' }
      ]}>

        <TouchableOpacity onPress={() => HandlePopBox(prd.id)}>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </TouchableOpacity>

      </View>



    </View>

  )

}