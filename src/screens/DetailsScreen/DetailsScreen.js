import React, { useRef } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from "../../assets/Bootstrap/Styles.js";
import uuid from 'uuid-random';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SlickSlide from '../../components/SlickSlide/SlickSlide.js';
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });
import { useState } from 'react';
import { useEffect } from 'react';
import CardViewItem from '../../components/CardViewItem/CardViewItem.js';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route }) {
    const { prd } = route.params;
    const [activeSlick, setActiveSlick] = useState('');
    const [collapseActive, setCollapseActive] = useState(false);
    const [activeSize, setActiveSize] = useState()
    const navigation = useNavigation();
    const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
    const dockHeight = useRef(new Animated.Value(0)).current;
    const [startAnimation, setStartAnimation] = useState(false);
    const loadingId = useSelector((state) => state.wishlistReducer.loadingId);
    const translateY = useRef(new Animated.Value(500)).current;
    const [activePopBox, setActivePopBox] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({ type: "loadingId", payload: false })

    }, [wishlist])

    useEffect(() => {
        if (startAnimation) {
            Animated.timing(
                dockHeight,
                {
                    toValue: 800,
                    duration: 500,
                    useNativeDriver: false, // margin animation doesn't support native driver
                }
            ).start();
        } else {
            dockHeight.setValue(0);


        }
    }, [dockHeight, startAnimation]);

    useEffect(() => {
        setActiveSlick(prd.id)
        setActiveSize(prd.availablesize[Math.ceil(prd.availablesize.length / 2) - 1])
    }, [])





    useEffect(() => {
        if (activePopBox) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300, // Adjust the duration as needed
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 500,
                duration: 500, // Adjust the duration as needed
                useNativeDriver: true,
            }).start();
        }
    }, [activePopBox, translateY]);




    return (

        // SafeAreaView style={[s.mt4]}
        <>




















            {/* Header */}
            <View style={[s.absolute, { zIndex: 9, top: 40, left: 20, opacity: 0.8 }]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={31} color="black" style={[s.shadowWhite]} />
                </Pressable>


            </View>

            <View style={[s.absolute, s.flexrow, { zIndex: 9, top: 40, right: 20 }]}>

                <AntDesign name="sharealt" size={27} color="black" style={[s.mr5, s.textDark]} />
                <Pressable onPress={() => {

                    dispatch({ type: "loadingId", payload: prd.id })
                    dispatch({ type: "addwishlist", payload: prd.id }


                    );

                }}>

                    <FontAwesome

                        name="heart" size={27} color={wishlist.includes(prd.id) ? "black" : 'grey'}
                    />

                </Pressable>
            </View>



            {prd ?

                <>
                    {/* image */}
                    <View
                        style={[{ 'height': collapseActive ? 400 : prd?.alternative.length > 0 ? 500 : 600, }]}

                    >

                        <FlatList
                            data={prd.imgurl}

                            keyExtractor={() => uuid()}
                            renderItem={({ item }) =>
                                // <Image style={{ 'height': collapseActive ? 400 : 500 }} source={{ uri: item }} resizeMode="cover" />
                                <Image style={{ 'height': collapseActive ? 400 : prd?.alternative.length > 0 ? 500 : 600, }} source={{ uri: item }} resizeMode="cover" />
                            }
                        />


                    </View>

                    {/* Alternative */}
                    {prd.alternative?.length && (!collapseActive) ?
                        <ScrollView style={[s.w100, { "backgroundColor": '#ecedef', }, s.mt1]}>

                            <View style={[s.flexrow, s.p1]}>
                                <SlickSlide prdId={prd.id} key={uuid()} hotborder={true} />
                                {prd.alternative.map(ip => <SlickSlide prdId={ip} key={uuid()} />)}
                            </View>

                        </ScrollView>
                        : null}




                    {/* bottom box */}
                    <View style={[s.btnWhite, { height: prd?.alternative.length && (!collapseActive) ? 245 : '100%' }]}>
                        {/* name */}
                        <View style={[s.flexrow, s.p3, s.pt5]}>
                            <Text style={[s.fwBold, s.fs6, s.letterSpacing]} numberOfLines={1} >{prd.name}</Text>
                        </View>
                        {/* price */}
                        <View style={[s.flexrow, s.px2, s.alignCenter]}>
                            <Text style={[s.btnWhite, s.fs3, s.fwBold, s.textDanger, s.mr2, s.ml1]}>{currency.format(prd.price)}</Text>
                            <Text style={[s.btnWhite, s.fs3, s.fwBold, s.lineThrough]}>{currency.format(prd.oldprice)}</Text>


                            {/* discount btn */}
                            {prd.oldprice > 0 &&
                                <Text style={[s.textLight, s.w15, s.textCenter, s.p1, s.ml3
                                    , { "backgroundColor": '#c43622' }
                                ]}>

                                    {Math.floor((prd.price / prd.oldprice) * 100)} %
                                </Text>


                            }

                        </View>



                        {/* button select size*/}
                        <View style={[s.px5, s.pt5, { display: collapseActive ? "none" : null }]}>
                            <Pressable style={[s.btnDark, s.p3, s.mt5, s.flexrow]} onPress={() => setCollapseActive(!collapseActive)}>
                                <Text
                                    style={[s.textLight, s.fwBold, s.letterSpacing, { fontFamily: 'Roboto' }]}
                                >SELECT SIZE</Text>
                                <FontAwesome name="long-arrow-right" style={[s.mlauto, s.pr1]} size={24} color="white" />
                            </Pressable>
                        </View>


                        {/* size information toggle */}
                        <View style={[s.p2, {
                            borderTopWidth: 0.75, borderTopColor: "lightgrey", marginTop: 30, paddingTop: 20,
                            display: (!collapseActive) ? "none" : null
                        }]}>

                            {/* size label */}
                            <View style={[s.JustifyCenter, s.alignCenter, s.flexrow, s.w30]}>
                                <Text style={[s.letterSpacing, s.fwBold, s.mr3, s.fs2Half]}>SIZE</Text>
                                <Entypo name="ruler" size={20} color="rgb(33, 34, 36)" style={[{ borderWidth: 0.5, borderColor: 'rgb(33, 34, 36)' }, s.px3, s.py1]} />
                            </View>

                            {/* size items */}

                            <View>
                                <ScrollView horizontal={true}>
                                    {prd?.availablesize.map((size, index) =>


                                        <Pressable
                                            key={uuid()}
                                            style={
                                                [s.mt5, s.flexrow,
                                                    , s.alignCenter, s.JustifyCenter,
                                                {
                                                    minWidth: 70, minHeight: 50,
                                                    borderBottomWidth: activeSize == size ? 3 : 0.5,

                                                }

                                                ]
                                            }
                                            onPress={() => setActiveSize(size)}>
                                            <Text style={[s.fs4,
                                            {
                                                fontWeight: activeSize == size ? "500" : "normal",
                                                color: activeSize == size ? "black" : "grey"
                                            }
                                            ]}>{size}</Text>
                                        </Pressable>





                                    )}


                                </ScrollView>
                            </View>

                            {/* button add to bag*/}
                            <View style={[s.px2, s.pt5, s.mt2]}>
                                <Pressable style={[s.btnLight, s.p3, s.flexrow
                                    , { borderWidth: 1, borderColor: "grey" }
                                ]} onPress={() =>

                                    setActivePopBox(!activePopBox)}>
                                    <Text
                                        style={[s.textDark, s.fwBold, s.letterSpacing, { fontFamily: 'Roboto' }]}
                                    >ADD TO BAG</Text>
                                    <SimpleLineIcons name="bag" style={[s.mlauto, s.pr1]} size={24} color="black" />

                                </Pressable>
                            </View>

                            <View style={[s.px2, s.mt2]}>
                                <Pressable style={[s.btnDark, s.p3, s.flexrow]} onPress={() => setCollapseActive(!collapseActive)}>
                                    <Text
                                        style={[s.textLight, s.fwBold, s.letterSpacing, { fontFamily: 'Roboto' }]}
                                    >Buy It Now</Text>
                                    <FontAwesome name="long-arrow-right" style={[s.mlauto, s.pr1]} size={24} color="white" />
                                </Pressable>
                            </View>


                        </View>




                    </View>










                    <Animated.View
                        style={{
                            position: 'absolute',
                            bottom: activePopBox ? '0%' : '-100%', // initially positioned off-screen
                            left: 0,
                            right: 0,
                            zIndex: 9,
                            alignItems: 'center',
                            transform: [{ translateY }],
                        }}
                    >

                        <View
                            style={{
                                width: '100%',
                                height: 275,
                                backgroundColor: 'white',
                                borderRadius: 10,


                            }}
                        >



                            <View style={[s.flexrow, s.p5, s.mb5]}>

                                <Text style={[s.fs3, s.mlauto,

                                { textTransform: 'uppercase' }, s.fwBold]}>Added TO Bag</Text>

                                <TouchableOpacity onPress={() => {
                                    setActivePopBox(!activePopBox);
                                    setCollapseActive(!collapseActive);
                                }} style={[s.mlauto]}>
                                    <AntDesign name="close" size={20} color="#454545" />
                                </TouchableOpacity>

                            </View>

                            <View style={[s.pb4, { borderBottomWidth: 0.5, borderColor: 'lightgrey' }]}>

                                <View style={[s.flexrow, s.alignCenter, { backgroundColor: '#ecedef' }]}>
                                    <View style={[s.flexrow, s.w100 , s.alignCenter]}>
                                        <Image
                                            style={{ 'height': 120, width: '37%' }} source={{ uri: prd.imgurl[0] }} resizeMode="stretch" />
                                            <View>
                                            <Text style={[s.fs3 , s.fwBold]}>{prd.name}</Text>
                                            <Text style={[s.fs3 , s.textMuted ]}>Size : {activeSize}</Text>
                                            </View>
                                    </View>
                                </View>
                              
                                <View style={[s.px2, s.mt4 , s.pb3 , s.letterSpacing ]}>
                                <Pressable style={[s.btnDark, s.p3, s.flexrow]} 
                                
                                
                                onPress={() => {
                                    setCollapseActive(!collapseActive)
                                    setActivePopBox(!activePopBox)
                                    navigation.navigate('Cart')
                                }}> 
                                    <Text
                                        style={[s.textLight, s.fwBold, s.letterSpacing, { fontFamily: 'Roboto' }]}
                                    >View Bag</Text>
                                    <FontAwesome name="long-arrow-right" style={[s.mlauto, s.pr1]} size={24} color="white" />
                                </Pressable>
                            </View>

                         

                            </View>














                        </View>
                    </Animated.View>




                    {/* Black Box */}
                    {activePopBox ?
                        <Pressable onPress={() => { setActivePopBox(false) }} style={[s.absolute, s.btnDark, s.top0, s.w100, s.h100, { opacity: 0.5 }]}>
                            <View>

                            </View>
                        </Pressable>

                        : null
                    }













                </>

                : <Text>Loading ...</Text>
            }

        </>






    )
}