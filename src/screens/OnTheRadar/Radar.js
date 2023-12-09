import React, { useEffect, useRef, useState } from 'react';
import { Animated, Button, Dimensions, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GETallProducts } from '../../assets/Firebase/FirebaseAsyncFunction';
import s from "../../assets/Bootstrap/Styles.js";


export default function SupCategery() {

  const allProducts = useSelector(state => state.allProductsReducer.allProducts);
  const dispatch = useDispatch();
  // const [startAnimation, setStartAnimation] = useState(false);
  // const dockHeight = useRef(new Animated.Value(0)).current;
  // const containerHeight = Dimensions.get('window').height ; // 
  // useEffect(() => {
  //   if (startAnimation) {
  //   Animated.timing(
  //     dockHeight,
  //     {
  //       toValue: containerHeight,
  //       duration: 500,
  //       useNativeDriver: false, // margin animation doesn't support native driver
  //     }
  //   ).start();}else{
  //     dockHeight.setValue(0);


  //   }
  // }, [dockHeight , startAnimation]);


  return (

    <>

{/* <View>

  <Text style={[s.btnInfo , s.p5 , {height : 140}]}>here is text</Text>
</View> */}

      {/* <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              height: dockHeight,
            },
          ]}
        >
          <Text style={styles.text}>Animated Margin</Text>
        </Animated.View>
      </View>

 */}


    

      <Button
        title="Get "
        onPress={ () => setStartAnimation(!startAnimation)
          
        
        } />

 








      {/* 
      <Text style={[s.btnDanger, s.mt5, s.p5, s.textLight, s.fs5, s.flexrow, s.JustifyCenter, s.textCenter]}>Ahmed</Text>



 */}






      {/* 

      <View>
        {allProducts &&
          allProducts.map(prd => <Text>{prd.id}</Text>)
        }
      </View> */}




    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});