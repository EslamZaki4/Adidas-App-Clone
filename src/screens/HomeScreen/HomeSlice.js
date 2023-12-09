

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Homecomponant } from "../../components/HomeComponents/Homecomponant.js";
import styles from "./Styles.js";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import s from "../../assets/Bootstrap/Styles.js";

export default function HomeSlice() {
  const [activeSection, setActiveSection] = useState("TRAINING");
  const scrollViewRef = useRef();

  const scrollToSection = (offsetY) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: offsetY, animated: true });
    }
  };

  const toggleSection = (section) => {
    setActiveSection(section);
    switch (section) {
      case "TRAINING":
        scrollToSection(0);
        break;
      case "ORIGINALS":
        scrollToSection(0);
        break;
      case "RUNNING":
        scrollToSection(0);
        break;
      case "YOGA":
        scrollToSection(0);
        break;
      case "SWIMMING":
        scrollToSection(0);
        break;
      default:
        break;
    }
  };
  // const { navigate } = useNavigation();
  return (

    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef} style={[s.btnWhite]}>


        <ScrollView 
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
          <View style={styles.buttContinerMen }>
            <Pressable style={styles.buttonHeader} >
              <Text>Men`s</Text>
              <Icon
                style={{ margin: 5 }}
                name="chevron-down"
                size={10}
                color="black"
              />
            </Pressable>
          </View>

          <View style={[styles.buttContiner , ]}>
            <Pressable
              style={[
                styles.buttonHeader,
                
                { opacity: activeSection === "TRAINING" ? 10 : 0.6 },
              ]}
              onPress={() => {
                toggleSection("TRAINING");
              }}
            >
              <Text>TRAINING</Text>
            </Pressable>
          </View>
          <View style={styles.buttContiner}>
            <Pressable
              style={[
                styles.buttonHeader,
                { opacity: activeSection === "ORIGINALS" ? 2 : 0.6 },
              ]}
              onPress={() => {
                toggleSection("ORIGINALS");
              }}
            >
              <Text>ORIGINALS</Text>
            </Pressable>
          </View>

          <View style={styles.buttContiner}>
            <Pressable
              style={[
                styles.buttonHeader,
                { opacity: activeSection === "RUNNING" ? 2 : 0.6 },
              ]}
              onPress={() => {
                toggleSection("RUNNING");
              }}
            >
              <Text>RUNNING</Text>
            </Pressable>
          </View>

          <View style={styles.buttContiner}>
            <Pressable
              style={[
                styles.buttonHeader,
                { opacity: activeSection === "YOGA" ? 2 : 0.6 },
              ]}
              onPress={() => {
                toggleSection("YOGA");
              }}
            >
              <Text>YOGA</Text>
            </Pressable>
          </View>


          <View style={styles.buttContiner}>
            <Pressable
              style={[
                styles.buttonHeader,
                { opacity: activeSection === "SWIMMING" ? 2 : 0.6 },
              ]}
              onPress={() => {
                toggleSection("SWIMMING");
              }}
            >
              <Text>SWIMMING</Text>
            </Pressable>
          </View>


        </ScrollView>
        {activeSection === "TRAINING" && (
          <>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" POWER PAST YOUR LIMITS"
                name="TRAINING"
                imageUrl="https://images7.alphacoders.com/114/1145219.jpg"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SUPERSTAR,GAZELLE,SAMBA"
                name="ORIGINALS"
                imageUrl="https://c.wallhere.com/photos/f7/0f/adidas_los_angeles_sneakers_white-999298.jpg!d"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="OUR LIGHTEST ULTRABOOST EVER"
                name="RUNNING"

                imageUrl="https://i.ibb.co/rk9Jb2c/image.png"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="STRETCH YOUR LIMITS"
                name="YOGA"
                imageUrl="https://i.ibb.co/NyY3r49/image.png"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SWIM SHOP"
                name="SWIMMING"
                imageUrl="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/382140s21.jpg?im=Resize,width=364"
              ></Homecomponant>
            </View>
          </>
        )}
        {activeSection === "ORIGINALS" && (
          <>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SUPERSTAR,GAZELLE,SAMBA"
                name="ORIGINALS"
                imageUrl="https://c.wallhere.com/photos/50/11/shoes_Adidas_legs_crossed_relaxing_bokeh-2193875.jpg!d"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" POWER PAST YOUR LIMITS"
                name="TRAINING"
                imageUrl="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/training-FW23-AlwaysOnPush-mIWP-4-strength-d_tcm143-1029263.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="OUR LIGHTEST ULTRABOOST EVER"
                name="RUNNING"
                imageUrl="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enMY/Images/runtastic-integration-story-launch-image3_203-398443.jpg"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="STRETCH YOUR LIMITS"
                name="YOGA"
                imageUrl="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt87d7cf480d3b75f5/6155d47889f413184efe80b3/ste-sbcl-ig-1x1-bracelet-arkai-23674-208787.jpg?format=pjpg&auto=webp&quality=75%2C90&width=640"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SWIM SHOP"
                name="SWIMMING"
                imageUrl="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/382140s21.jpg?im=Resize,width=364"
              ></Homecomponant>
            </View>
          </>
        )}
        {activeSection === "RUNNING" && (
          <>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="OUR LIGHTEST ULTRABOOST EVER"
                name="RUNNING"
                imageUrl="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enMY/Images/runtastic-integration-story-launch-image3_203-398443.jpg"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SUPERSTAR,GAZELLE,SAMBA"
                name="ORIGINALS"
                imageUrl="https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe3bb7e01/images/fw23-brand-campaign-launch-glp-m-mh-m.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" POWER PAST YOUR LIMITS"
                name="TRAINING"
                imageUrl="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/training-FW23-AlwaysOnPush-mIWP-4-strength-d_tcm143-1029263.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="STRETCH YOUR LIMITS"
                name="YOGA"
                imageUrl="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt87d7cf480d3b75f5/6155d47889f413184efe80b3/ste-sbcl-ig-1x1-bracelet-arkai-23674-208787.jpg?format=pjpg&auto=webp&quality=75%2C90&width=640"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SWIM SHOP"
                name="SWIMMING"
                imageUrl="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/382140s21.jpg?im=Resize,width=364"
              ></Homecomponant>
            </View>
          </>
        )}

        {activeSection === "YOGA" && (
          <>

            <View style={{ height: 800}}>
              <Homecomponant
                textHome="STRETCH YOUR LIMITS"
                name="YOGA"
                imageUrl="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt87d7cf480d3b75f5/6155d47889f413184efe80b3/ste-sbcl-ig-1x1-bracelet-arkai-23674-208787.jpg?format=pjpg&auto=webp&quality=75%2C90&width=640"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="OUR LIGHTEST ULTRABOOST EVER"
                name="RUNNING"
                imageUrl="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enMY/Images/runtastic-integration-story-launch-image3_203-398443.jpg"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SUPERSTAR,GAZELLE,SAMBA"
                name="ORIGINALS"
                imageUrl="https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe3bb7e01/images/fw23-brand-campaign-launch-glp-m-mh-m.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" POWER PAST YOUR LIMITS"
                name="TRAINING"
                imageUrl="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/training-FW23-AlwaysOnPush-mIWP-4-strength-d_tcm143-1029263.jpg"
              ></Homecomponant>
            </View>



            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SWIM SHOP"
                name="SWIMMING"
                imageUrl="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/382140s21.jpg?im=Resize,width=364"
              ></Homecomponant>
            </View>
          </>
        )}
        {activeSection === "SWIMMING" && (
          <>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SWIM SHOP"
                name="SWIMMING"
                imageUrl="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/382140s21.jpg?im=Resize,width=364"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="OUR LIGHTEST ULTRABOOST EVER"
                name="RUNNING"
                imageUrl="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enMY/Images/runtastic-integration-story-launch-image3_203-398443.jpg"
              ></Homecomponant>
            </View>
            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" SUPERSTAR,GAZELLE,SAMBA"
                name="ORIGINALS"
                imageUrl="https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwe3bb7e01/images/fw23-brand-campaign-launch-glp-m-mh-m.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome=" POWER PAST YOUR LIMITS"
                name="TRAINING"
                imageUrl="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/training-FW23-AlwaysOnPush-mIWP-4-strength-d_tcm143-1029263.jpg"
              ></Homecomponant>
            </View>

            <View style={{ height: 800 }}>
              <Homecomponant
                textHome="STRETCH YOUR LIMITS"
                name="YOGA"
                imageUrl="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt87d7cf480d3b75f5/6155d47889f413184efe80b3/ste-sbcl-ig-1x1-bracelet-arkai-23674-208787.jpg?format=pjpg&auto=webp&quality=75%2C90&width=640"
              ></Homecomponant>
            </View>


          </>
        )}
      </ScrollView>
    </View>

  )
}