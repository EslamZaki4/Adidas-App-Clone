import React, { useEffect, useRef, useState } from 'react';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import s from "../../assets/Bootstrap/Styles.js";
import { useNavigation } from '@react-navigation/native';

export default function SlickSlide({ prdId , hotborder = false}) {

    const allProducts = useSelector((state) => state.allProductsReducer.allProducts)
    const alternative = useSelector((state) => state.allProductsReducer.alternative)
    const dispatch = useDispatch();
    const [prd, setPrd] = useState();
    const navigation = useNavigation();
    const handleSwitchActive = () => {

        var _prd = allProducts.find(prd => prd.id == prdId) || alternative.find(prd => prd.id == prdId)
        if (!_prd) return;//not exist storeDB
        navigation.navigate("DetailsScreen", { prd: _prd })

    }




    const effRan = useRef(false);
    useEffect(() => {

        if (effRan.current) return
        const _prd = alternative.find((prd) => prd.id == prdId) || allProducts.find((prd) => prd.id == prdId);
        setPrd(_prd);
        return () => effRan.current = true

    }, [])



    return (

        <>

            {prd ?

                <TouchableOpacity onPress={handleSwitchActive}

                    style={[
                        s.w20,
                        s.mxHalf,
                        {
                            height: 69,
                            borderWidth:  hotborder ? 1 : 0,
                            borderColor:  hotborder ? '#454545' : 0,
                            borderCurve: 'circular',
                            borderStyle: 'solid'
                        },

                    ]}
                >


                    <Image style={[s.h100, s.w100]}
                        source={{ uri: prd.imgurl[0] }} resizeMode="stretch"
                    />
                </TouchableOpacity>

                : <></>
            }

        </>
    )
}