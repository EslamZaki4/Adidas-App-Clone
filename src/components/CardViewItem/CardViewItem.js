import { Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import s from "../../assets/Bootstrap/Styles.js";
import DetailsScreen from "../../screens/DetailsScreen/DetailsScreen.js";
export default function CardViewItem({ prd }) {

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  const navigation = useNavigation();
  return (


    <Pressable onPress={()=> navigation.navigate("DetailsScreen" , { prd: prd })}>
      <View style={[s.flexrow, { "height": 180, "backgroundColor": '#f0f1f4' }, , s.p2, s.myHalf]}>

        <Image style={[s.col2Half, s.h100]} source={{ uri: prd.imgurl[0] }} resizeMode="cover" />

        {/* card info  */}
        <View style={[s.col3Half,]}>

          <View style={[s.pl3]}>

            {/* price */}
            <View style={[s.flexrow]}>
              <Text style={[s.btnWhite, s.mt3, s.fs2Half, s.p1, s.w50, s.textCenter, s.textDanger]}>{currency.format(prd.price)}</Text>
              <Text style={[s.btnWhite, s.mt3, s.fs2Half, s.p1, s.w50, s.textCenter, s.lineThrough]}>{currency.format(prd.oldprice)}</Text>
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
              <Text>Size : </Text>
              <Text>{prd.size}</Text>

              <Text style={[s.ml2]}>Quantity : </Text>
              <Text>{prd.qty}</Text>
            </View>
          </View>


          <View style={[s.flexrow, s.JustifyStart, s.ml4]}>
            <Pressable style={[s.p1, s.flexrow, s.w50, s.mt2, s.border, s.justifyBetween, s.px2]}>
              <Text style={[s.fwBold, s.letterSpacing, s.fs2]}>SAVE</Text>
              <FontAwesome name="heart-o" size={18} color="black" />
            </Pressable>
          </View>



        </View>


        {/* 3 dots */}
        <View style={[s.JustifyCenter, s.colHalf, s.alignEnd, s.pr2,
        { "width": '20px' }]}>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </View>

      </View>
    </Pressable>
  )

}