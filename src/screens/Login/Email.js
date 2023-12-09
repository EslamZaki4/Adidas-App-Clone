import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Styles from "../Regist/Loginstyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../assets/Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Email() {
  const [email, setEmail] = useState("");
  const [ToLogin, setToLogin] = useState(true);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [IconChange, setIcon] = useState(true);
  const [message, setMessage] = useState({
    ema: false,
    passwor: false,
  });
  const [user, setUser] = useState("");
  const handelEmail = (e) => {
    setEmail(e);

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage({ ema: false });
    } else {
      setMessage({ ema: true });
    }
  };

  const handelpassword = (e) => {
    setPassword(e);

    let passWordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;

    if (!passWordRegex.test(password)) {
      setMessage(false);
    } else {
      setMessage(true);
    }
  };

  const goToWritePass = async () => {
    const res = await getDocs(collection(db, "users"));

    let userFound = false;

    res.docs.forEach((doc) => {
      if (doc.data().email === email) {
        userFound = true;
      }
    });

    if (userFound) {
      setToLogin(false);
    } else {
      alert("No account, so let's get you one");
      navigation.navigate("Login");
    }
  };

  const toggleTcon = () => {
    setIcon(!IconChange);
  };

  const onLogin = async () => {
    

      const res = await getDocs(collection(db, "users"));
      res.docs.forEach((doc) => {
        if (doc.data().email === email) { 
          const  userEmail = doc.data().email;
      
          saveName(userEmail);
        
        }
      });
      
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("the email or password is not valied ");

        console.log(errorCode, errorMessage);
      });


    };
    const saveName = async (userEmail) => {
      try {
        await AsyncStorage.setItem("Email", userEmail);
        console.log("Name stored successfully!",userEmail);
      } catch (error) {
        console.log("Error storing name:", error);
      }
    };
  
  return (
    <View>
      <View style={Styles.loginContiner}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{ margin: 10, top: 60, width: "10%" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Icon
              style={{ fontWeight: "100" }}
              name="arrow-left"
              size={26}
              color="black"
            />
          </Pressable>
          <Text style={Styles.TextPLogin}>LOG IN</Text>
        </View>

        {ToLogin == true ? (
          <>
            <View>
              <Text style={{ textAlign: "center", width: "90%", top: 80 }}>
                {" "}
                let`s check if you have an account...
              </Text>
            </View>
            <Text style={Styles.TextEmail}>Email</Text>
            <View style={Styles.continerInput}>
              <View style={Styles.InputEma}>
                <TextInput
                  style={{ width: "60%" }}
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChangeText={(value) => {
                    handelEmail(value);
                  }}
                  //   onSubmitEditing={() => alert(`Welcome to`)}
                />
              </View>
            </View>

            {message.ema == false ? (
              ""
            ) : (
              <View>
                <Pressable
                  onPress={() => {
                    goToWritePass();
                  }}
                >
                  <Icon
                    style={{
                      position: "absolute",
                      margin: 10,
                      top: 70,
                      right: 40,
                      width: "10%",
                      zIndex: 9,
                    }}
                    name="arrow-right"
                    size={26}
                    color="gray"
                  />
                </Pressable>
              </View>
            )}
          </>
        ) : (
          <>
            <Text style={{ textAlign: "center", width: "90%", top: 80 }}>
              {" "}
              looks like we already know you{" "}
            </Text>

            <Text style={Styles.TextEmail}>password</Text>

            <View style={Styles.continerInput}>
              <View style={Styles.InputEma}>
                <TextInput
                  style={{ width: "60%" }}
                  value={password}
                  secureTextEntry={IconChange == true ? true : false}
                  placeholder="Password"
                  onChangeText={(value) => {
                    handelpassword(value);
                  }}
                />
              </View>
            </View>
            <Pressable
              onPress={() => {
                toggleTcon();
              }}
            >
              <Icon
                style={{
                  position: "absolute",
                  margin: 10,
                  top: 70,
                  right: 50,
                  width: "10%",
                  zIndex: 9,
                }}
                name={IconChange == true ? "eye" : "eye-slash"}
                size={26}
                color="gray"
              />
            </Pressable>
            <Pressable style={Styles.buttonSin} onPress={onLogin}>
              <Text style={{ fontSize: 15, fontWeight: 500, color: "white" }}>
                SIN IN{" "}
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}
