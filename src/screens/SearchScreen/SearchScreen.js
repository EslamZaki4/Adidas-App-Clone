import { AntDesign, Fontisto } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import s from "../../assets/Bootstrap/Styles.js";
import { useSelector } from 'react-redux';
import SearchViewItem from '../../components/SearcViewItem/SearcViewItem.js';
import { useNavigation } from '@react-navigation/native';
import uuid from 'uuid-random';
import CartProudact from './../../components/CartProudact/CartProudact';
import CardViewItem from './../../components/CardViewItem/CardViewItem';
import DetailsScreen from './../DetailsScreen/DetailsScreen';

export default function SearchScreen() {
  const [inputValue, setInputValue] = useState('');
  const [filterResult, setFilterResult] = useState([]);
  const [filterResultCat, setFilterResultCat] = useState([]);
  const navigation = useNavigation();
  const allProducts = useSelector((state) => state.allProductsReducer.allProducts)
  const alternative = useSelector((state) => state.allProductsReducer.alternative)


  const handleInputChange = (text) => {



    let allprd = [...allProducts, ...alternative];

    let srchResult = allprd.filter(prd => inputValue.length > 0 && prd.name.toLowerCase().startsWith(inputValue.toLocaleLowerCase()))
    let srchResultCat = allprd.filter(prd => inputValue.length > 0 && (prd.arcategory.toLowerCase().startsWith(inputValue.toLocaleLowerCase()) || prd.category.toLowerCase().startsWith(inputValue.toLocaleLowerCase())))
    setFilterResult(srchResult)
    setFilterResultCat(srchResultCat)




    setInputValue(text); // Update the inputValue state with the entered text
  };
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const FadeInView = ({ children }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;


    if (inputValue.length == 2) {

      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 1000, // Animation duration in milliseconds
          useNativeDriver: true, // Specify the use of native driver for performance
        }
      ).start();

    } else if (inputValue.length > 2) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 0, // Animation duration in milliseconds
          useNativeDriver: true, // Specify the use of native driver for performance
        }
      ).start();
    }

    else {

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 0, // Animation duration in milliseconds
          useNativeDriver: true, // Specify the use of native driver for performance
        }
      ).start();

    }







    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        {children}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{marginTop : 35}}>
      {/* // input */}
      <View style={[s.flexrow, s.alignCenter, s.btnWhite]}>

        <View style={[s.mx5, s.btnWhite]}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="#454545" />

          </Pressable>

        </View>

        <View style={[s.w80]}>
          <TextInput
            style={[{
              height: 50,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              color: "black"

            }]}
            autoFocus={true}
            placeholder="Find products ..."
            onChangeText={handleInputChange} // Update state when the text changes
            value={inputValue} // Set the value of the input field
          />
        </View>


      </View>

      {/* 
      {
        inputValue.length >= 2 ? <View style={[s.absolute, { zIndex: 99, top: windowHeight / 2 - 150, left: windowWidth / 2 - 40, }]}>
          <Text>Loading ...</Text>
        </View> : null

      } */}




      {inputValue.length == 0 ?

        <>


          {/* //recently viewed */}
          <View style={[{
            height: 70,
            borderWidth: 0.5,
            borderColor: 'grey'

          }, s.btnWhite, s.flexrow, s.alignCenter, s.justifyBetween, s.px5,]}

          >
            <Text style={[s.letterSpacing, { textTransform: 'uppercase', color: '#454545', fontStyle: 'italic' }, s.fs3, s.fwBold]}>recently viewed</Text>
            <Fontisto name="angle-right" size={15} color="#454545" />
          </View>


          {/* //srch histor */}
          <View style={[{ height: 70, }, s.btnWhite, s.flexrow, s.alignCenter, s.justifyBetween, s.px5, s.mt3]}

          >
            <Text style={[{ textTransform: 'uppercase', color: 'black', }, s.fs2, s.fwBold]}>
              search history</Text>
            <Text style={[{ textTransform: 'uppercase', color: 'black', }, s.fs2, s.fwBold]}>
              clear all</Text>
          </View>

        </>

        :
        <>
          {filterResult.length > 0 ?
            <Text style={[s.p3, s.fwBold]}>PRDOUCTS : </Text>
            : null
          }

          <View>
            <FlatList
              horizontal
              data={filterResult}

              keyExtractor={() => uuid()}
              renderItem={({ item }) =>
                <View style={[]}>
                  <Pressable onPress={() => navigation.navigate("DetailsScreen", { prd: item })}>
                    <SearchViewItem prd={item} />
                  </Pressable>
                </View>
              }
            />
          </View>


          {filterResultCat.length > 0 ?
            <Text style={[s.p3, s.fwBold]}>Category : </Text>
            : null
          }

          <View>
            <FlatList
              horizontal
              data={filterResultCat}

              keyExtractor={() => uuid()}
              renderItem={({ item }) =>

                <SearchViewItem prd={item} />
              }
            />
          </View>
        </>

      }





















    </SafeAreaView>
  )
}