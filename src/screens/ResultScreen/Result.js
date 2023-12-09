import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CartProudact from "../../components/CartProudact/CartProudact";
import { useSelector } from "react-redux";
import styles from "./ResultStyle"
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Result() {
  const [loading, setLoading] = useState(true);
  const allproducts = useSelector(
    (state) => state.allProductsReducer.allproducts
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (allproducts?.length > 0) {
      setLoading(true);
      setProducts(allproducts);
    }
  }, [allproducts]);
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
      <Pressable onPress={() => {""}}>
          <Icon style={{ margin: 10 }} name="bars" size={25} color="gray" />
        </Pressable>
        <Pressable 
        style={styles.buttonResult}
        onPress={() => {""}}>
          <Text style={styles.textResult}>Shoes</Text>
        </Pressable>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <CartProudact
              textHome={item.name}
              price={item.price}
              imageUrl={item.imgurl[2]}
            ></CartProudact>
          </View>
        )}
      />
    </View>
  );
}
