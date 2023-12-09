import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Styles from "./Loginstyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../assets/Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
export default function RegisEmail() {
  const [email, setEmail] = useState("");
  const [ToLogin, setToLogin] = useState(true);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [IconChange, setIcon] = useState(true);
  const [message, setMessage] = useState({
    ema: false,
    passwor: false,
  });

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
      setMessage({passwor:false});
    } else {
      setMessage({passwor:true});
    }
  };

  const goToWritePass = () => {
    setToLogin(false);
  };

  const toggleTcon = () => {
    setIcon(!IconChange);
  };

  const onLogin = async () => {


    await addDoc(collection(db,"users"),{
     
      email:email,
    
     })


    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);

        navigation.navigate("Login");
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("The email address provided is invalid.");
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <View>
      <View style={Styles.loginContiner}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{ margin: 10, top: 60, width: "10%" }}
            onPress={() => navigation.navigate("Regist")}
          >
            <Icon
              style={{ fontWeight: "100" }}
              name="arrow-left"
              size={26}
              color="black"
            />
          </Pressable>
          <Text style={Styles.TextPLogin}>REGISTER</Text>
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

            <Text style={Styles.Textvalipass}>Must be at least 8 characters, with an uppercase, lowercase, one number and a special character</Text>
            <Pressable style={[Styles.buttonSin,{display:message.passwor==true?"flex":"none"}]} onPress={onLogin}>
              <Text style={{ fontSize: 15, fontWeight: 500, color: "white" }}>
                JOIN{" "}
              </Text>
            </Pressable>


          </>
        )}
      </View>
    </View>
  );
}
