import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from "./cartStyle";
import s from "../../assets/Bootstrap/Styles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CartProudact({ prd }) {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
  return (


    <ScrollView>

      <View style={styles.cartContiner}>
        <Icon
          style={styles.favorit}
          name="heart"
          size={25}
        />
        <Text style={[styles.textpart, s.fs2Half]}>{prd.name} </Text>
        <Text style={[styles.textprice, s.my1, s.ml2, s.fwBold, s.fs2]}>{currency.format(prd.price)} </Text>

        {prd.oldprice > 0 ?
          <Text style={[styles.textpriceAfter, s.fwBold, s.fs2, s.textSecondary]}>{currency.format(prd.oldprice)} </Text>
          : null}

        {/* discount btn */}
        {prd.oldprice > 0 &&
          <Text style={[styles.textpriceAfter, s.textLight, s.w25, s.textCenter, s.p1, s.my1
            , { backgroundColor: 'white', marginLeft: 100, color: '#454545', }, s.fwBold, s.fs2
          ]}>

            {Math.floor((prd.price / prd.oldprice) * 100)} %
          </Text>
        }

        <Text style={[s.absolute, s.fs1, s.textSecondary, s.bottom1]}>{
          prd.gender == 'الرجال' ? 'Men' : 
          prd.gender == 'النساء' ? 'Women' :
          prd.gender == 'الأطفال' ? 'Kids'  :
          prd.gender == 'الاطفال' ? 'Kids' : null
}</Text>


        <Image
          source={{
            uri: prd.imgurl[0],
          }}
          style={styles.image}
        />
      </View>

    </ScrollView>

  )
}