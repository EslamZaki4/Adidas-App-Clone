import { View, Text, Image, SafeAreaView, Pressable, ScrollView, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import uuid from 'uuid-random';
import Icon from "react-native-vector-icons/FontAwesome5";
import CartProudact from "../../components/CartProudact/CartProudact.js";
import styles from "./styleSuo.js";
import { useDispatch, useSelector } from "react-redux";
import { GETallProducts } from "../../assets/Firebase/FirebaseAsyncFunction.js";
import BottunSupCatrgery, { ButtonSeeAll } from "./Bottuns.js";
import FlatlistCart from "./FlatlistCart.js";
import { useNavigation } from "@react-navigation/native";
import s from "../../assets/Bootstrap/Styles.js";


export default function SupCategery({ gender }) {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.allProductsReducer.allProducts);

  const navigate = useNavigation();




  return (
    <SafeAreaView>






      {products?.length ?
        <View style={[{ aspectRatio: 0.6 }, s.btnLight]}>
          <ScrollView style={{ width: "100%", height: "100%" }}>
            <Image
              source={{
                uri: gender == 'men' ? 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwf32be46a/MENA_Local_Activations/em-eg-Wintershop-originals-fw23-launch-hp-tc-d.jpg' :
                  "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/in_blackfriday_commercial_fw23_launch_hp_mh_d_9fcf3a01ef.jpg",
              }}
              style={{ width: "100%", aspectRatio: 2.5 }}
            />

            {/* <Text>gender is{gender}</Text> */}
            <BottunSupCatrgery></BottunSupCatrgery>


            {/* <View style={{ padding: "3%" }}>

              <View style={[s.relative, { flexDirection: "row", alignItems: "center" }]}>


                <Text style={{ color: "#f73333", fontSize: 17, width: "80%" }}>
                  BLACK FRIDAY SALE SHOES !
                </Text>

                <Icon
                  style={[s.absolute, { right: 10, top: 10 }]}
                  name="cart-plus"
                  size={23}
                  color="gray"

                />

              </View>



              <Text style={{ fontSize: 14, width: "75%", color: "grey", marginLeft: 7 }}>
                we are turning up the heat with discounts of up to 60% off
              </Text>


              <ButtonSeeAll></ButtonSeeAll>
            </View> */}




            {/* <View>



              <FlatList

                data={products}
                horizontal={true}
                keyExtractor={() => uuid()}
                renderItem={({ item }) => (
                  <Pressable onPress={() => navigate.navigate("DetailsScreen", { prd: item })}>

                    <CartProudact prd={item}
                      textHome={item.name}
                      price={item.price}
                      imageUrl={item.imgurl[2]}
                    ></CartProudact>

                  </Pressable>
                )}
              />






            </View> */}




            <View style={{ padding: "3%" }}>
              <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 7 }}>

                {gender == 'men' ? "MEN'S HOODIES" : null}
                {gender == 'women' ? "WOMEN'S JACKETS" : null}
                {gender == 'kids' ? "INFANT AND TODDLER CLOTHING" : null}

              </Text>
              <ButtonSeeAll />


              <FlatList
                key={uuid()}
                data={
                  gender == 'men' ? products.filter((prd) => (prd.gender == 'الرجال' && prd.category == 'هودي')) :
                    gender == 'women' ? products.filter((prd) => (prd.gender == 'النساء' && prd.category == 'جاكيت')) :
                      gender == 'kids' ? products.filter((prd) => (prd.gender == 'الأطفال' && prd.category == 'ملابس')) :
                        null
                }
                horizontal={true}
                keyExtractor={() => uuid()}
                renderItem={({ item }) => (
                  <Pressable onPress={() => navigate.navigate("DetailsScreen", { prd: item })}>

                    <CartProudact prd={item}
                      textHome={item.name}
                      price={item.price}
                      imageUrl={item.imgurl[2]}
                    />

                  </Pressable>
                )}
              />



            </View>



            <View style={{ padding: "3%" }}>
              <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 7 }}>
                {gender == 'men' ? "MEN'S T SHIRTS" :
                  gender == 'women' ? "WOMEN'S T SHIRTS" :
                    gender == 'kids' ? "INFANT AND TODDLER SHOES" :
                      null}


              </Text>
              <ButtonSeeAll />


              <FlatList
                key={uuid()}
                data={
                  gender == 'men' ? products.filter((prd) => (prd.gender == 'الرجال' && prd.category == 'تي شيرت')) :
                    gender == 'women' ? products.filter((prd) => (prd.gender == 'النساء' && prd.category == 'تي شيرت')) :
                      gender == 'kids' ? products.filter((prd) => (prd.gender == 'الأطفال' && prd.category == 'أحذية')) :
                        null
                }
                horizontal={true}
                keyExtractor={() => uuid()}
                renderItem={({ item }) => (
                  <Pressable onPress={() => navigate.navigate("DetailsScreen", { prd: item })}>

                    <CartProudact prd={item}
                      textHome={item.name}
                      price={item.price}
                      imageUrl={item.imgurl[2]}
                    ></CartProudact>

                  </Pressable>
                )}
              />



            </View>












            <View style={{ padding: "3%" }}>
              <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 7 }}>
                {
                  gender == 'men' ? "MEN'S SHORTS" :
                    gender == 'women' ? "WOMEN'S TROUSERS" :
                      gender == 'kids' ? "INFANT AND TODDLER ACCESSORIES" :

                        null}


              </Text>
              <ButtonSeeAll />


              <FlatList
                key={uuid()}
                data={
                  gender == 'men' ? products.filter((prd) => (prd.gender == 'الرجال' && prd.category == 'شورت')) :
                    gender == 'women' ? products.filter((prd) => (prd.gender == 'النساء' && prd.category == 'بنطال')) :
                      gender == 'kids' ? products.filter((prd) => (prd.gender == 'الأطفال' && prd.category == 'إكسسوارت')) :
                        null
                }
                horizontal={true}
                keyExtractor={() => uuid()}
                renderItem={({ item }) => (
                  <Pressable onPress={() => navigate.navigate("DetailsScreen", { prd: item })}>

                    <CartProudact prd={item}
                      textHome={item.name}
                      price={item.price}
                      imageUrl={item.imgurl[2]}
                    />

                  </Pressable>
                )}
              />



            </View>









            {gender != 'kids' ?
              <View style={{ padding: "3%" }}>
                <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 7 }}>
                  {gender == 'men' ? "MEN'S SHOES" :
                    gender == 'women' ? "WOMEN'S SHOES" :
                      null}


                </Text>
                <ButtonSeeAll />


                <FlatList
                  key={uuid()}
                  data={
                    gender == 'men' ? products.filter((prd) => (prd.gender == 'الرجال' && prd.category == 'أحذية')) :
                      gender == 'women' ? products.filter((prd) => (prd.gender == 'النساء' && prd.category == 'أحذية')) :
                        null
                  }
                  horizontal={true}
                  keyExtractor={() => uuid()}
                  renderItem={({ item }) => (
                    <Pressable onPress={() => navigate.navigate("DetailsScreen", { prd: item })}>

                      <CartProudact prd={item}
                        textHome={item.name}
                        price={item.price}
                        imageUrl={item.imgurl[2]}
                      ></CartProudact>

                    </Pressable>
                  )}
                />



              </View>
              : null}
          </ScrollView>
        </View>
        : <Text> ...loadding</Text>
      }
    </SafeAreaView>
  );
}
