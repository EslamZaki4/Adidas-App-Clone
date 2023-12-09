// import { View, Text, FlatList } from 'react-native'

// import CartProudact from '../../components/CartProudact/CartProudact'
// import { useDispatch, useSelector } from "react-redux";
// import { GETallProducts } from "../../assets/Firebase/FirebaseAsyncFunction.js";
// import React, { useEffect, useRef, useState } from "react";
// export default function FlatlistCart({loading,setLoading}) {

//     // const [loading, setLoading] = useState(true);

//     const [products, setProducts] = useState([]);
  
//     const allProducts = useSelector(
//       (state) => state.allProductsReducer.allProducts
//     );
//     const dispatch = useDispatch();
//     const effRan = useRef(false);
  
//     useEffect(() => {
//       if (effRan.current) return;
  
//       const getdata = async () => {
//         try {
//           const response = await GETallProducts();
//           dispatch({ type: "getallProducts", payload: response });
//           setProducts(allProducts);
//           setLoading(false);
//           effRan.current = true;
//         } catch (error) {
//           //console.warn("Error fetching data:", error);
//           setLoading(false);
          
//           // Handle error state or retry logic if needed
//         }
//         console.log(loading);
//         //console.warn(allProducts);
//       };
//       getdata();
//     }, [dispatch, effRan, setProducts]);

//   return (
//     <View>
//          <FlatList
//                 data={products}
//                 horizontal={true}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                   <View>
//                     <CartProudact
//                       textHome={item.name}
//                       price={item.price}
//                       imageUrl={item.imgurl[2]}
//                     ></CartProudact>
//                   </View>
//                 )}
//               />
//     </View>
//   )
// }

//   {/* <ScrollView horizontal>
//               <CartProudact
//                 textHome="STRETCH YOUR LIMITS"
//                 price="85678"
//                 imageUrl="https://assets.adidas.com/images/w_940,f_auto,q_auto/809b5bf8d633459e8b3bae89001abb7d_9366/GX6763_04_standard.jpg"
//               ></CartProudact>
//               <CartProudact
//                 textHome="STRETCH YOUR LIMITS"
//                 price="99485"
//                 imageUrl="https://assets.adidas.com/images/w_940,f_auto,q_auto/e4e60986e4c14470ac36ac3700ad3bf8_9366/FZ3439_04_standard.jpg"
//               ></CartProudact>
//               <CartProudact
//                 textHome="STRETCH YOUR LIMITS"
//                 price="258641"
//                 imageUrl="https://assets.adidas.com/images/w_940,f_auto,q_auto/809b5bf8d633459e8b3bae89001abb7d_9366/GX6763_04_standard.jpg"
//               ></CartProudact>
//               <CartProudact
//                 textHome="STRETCH YOUR LIMITS"
//                 price="99485"
//                 imageUrl="https://assets.adidas.com/images/w_940,f_auto,q_auto/e4e60986e4c14470ac36ac3700ad3bf8_9366/FZ3439_04_standard.jpg"
//               ></CartProudact>
//             </ScrollView> */}