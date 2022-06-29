import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import bgImage from "../assets/bg.png";

export default function Signup({ navigation }) {
  const isValidEmail = (val) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(val);
  };
  const isValidPassword = (val) => {
    const regx =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regx.test(val);
  };

  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    // if(val.trim().length >= 4){
    if (isValidEmail(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };
  const textInput = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        firstname: val,
        lastname: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        firstname: val,
        lastname: val,
        check_textInputChange: false,
      });
    }
  };
  const textInputphone = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    // if(val.trim().length >= 6){
    if (isValidPassword(val)) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const submit = (email) => {
    if (email === "sai@gmail.com") {
      Alert.alert("Successfully Created Account");
      navigation.navigate("Login");
    } else {
      Alert.alert("enter valid mail and password");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <View
            style={{
              flex: 1,
              paddingTop: hp("8%"),
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/back.png")} />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/brandLogo.png")} />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text
            style={{
              color: "black",
              fontSize: hp("4%"),
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
          <Text
            style={{
              color: "#4B4F54",
              fontSize: hp("2%"),
              paddingTop: hp(2),
              paddingBottom: hp(2),
            }}
          >
            Complete the form below to create your account.
          </Text>
          <View style={{ width: "100%" }}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={{
                  height: hp("6%"),
                  width: hp("20%"),
                  margin: 12,
                  borderWidth: 1,
                  borderColor: "#D3D3D3",
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                }}
                placeholder="First Name*"
                autoCapitalize="none"
                onChangeText={(val) => textInput(val)}
              />

              <TextInput
                style={{
                  height: hp("6%"),
                  width: hp("20%"),
                  margin: 12,
                  marginLeft: 5,
                  borderWidth: 1,
                  borderColor: "#D3D3D3",
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                }}
                placeholder="Last Name*"
                autoCapitalize="none"
                onChangeText={(val) => textInput(val)}
              />
            </View>
            {data.firstname ? null : (
              <Text style={{ color: "red" }}>Enter Firstname and Lastname</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Email*"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.isValidEmail ? null : (
              <Text style={{ color: "red" }}>Enter Valid Email</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Phone #*"
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(val) => textInputphone(val)}
            />
            {data.phone ? null : (
              <Text style={{ color: "red" }}>Enter Phone Number</Text>
            )}
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: hp(2), height: hp(2), margin: hp(1) }}
                source={require("../assets/info.png")}
              />
              <Text
                style={{
                  padding: 2,
                  fontSize: hp("2%"),
                  flex: 2,
                  color: "#4B4F54",
                }}
              >
                password must be 8 characters and 1 Uppercase and 1 Special
                character and 1 Number should be there
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Your Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(val) => handlePasswordChange(val)}
            />

            {data.isValidPassword ? null : (
              <Text style={{ color: "red" }}>
                password must be 8 characters and 1 Uppercase and 1 Special
                character and 1 Number should be there
              </Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(val) => handlePasswordChange(val)}
            />

            {data.isValidPassword ? null : (
              <Text style={{ color: "red" }}>
                password must be 8 characters and 1 Uppercase and 1 Special
                character and 1 Number should be there
              </Text>
            )}
            <View style={{ margin: 6 }}>
              <Text style={{ padding: 2, color: "#4B4F54" }}>
                Date of Birth *
              </Text>
            </View>

            <View style={{ flexDirection: "row", padding: 2 }}>
              <TextInput
                style={{
                  height: hp("6%"),
                  width: hp("13%"),
                  margin: 6,
                  marginLeft: 10,
                  borderWidth: 1,
                  borderColor: "#D3D3D3",
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                }}
                placeholder="DD"
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={(val) => textInputphone(val)}
              />
              <TextInput
                style={{
                  height: hp("6%"),
                  width: hp("13%"),
                  margin: 6,
                  borderWidth: 1,
                  borderColor: "#D3D3D3",
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                }}
                placeholder="MM"
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={(val) => textInputphone(val)}
              />
              <TextInput
                style={{
                  height: hp("6%"),
                  width: hp("13%"),
                  margin: 6,
                  borderWidth: 1,
                  borderColor: "#D3D3D3",
                  padding: 8,
                  borderRadius: 5,
                  backgroundColor: "#F5F5F5",
                }}
                placeholder="YYYY"
                autoCapitalize="none"
                keyboardType="numeric"   

                
                onChangeText={(val) => textInputphone(val)}
              />
            </View>
            {data.phone ? null : (
              <Text style={{ color: "red" }}>Enter data of Birth</Text>
            )}
            <View style={{ flexDirection: "row", padding: hp(1) }}>
              <Image
                style={{ width: hp(2), height: hp(2), margin: hp(1) }}
                source={require("../assets/check.png")}
              />
              <Text style={{ fontSize: hp("2%"), flex: 2, color: "#4B4F54" }}>
                Yes! I'd like to receive occasional emails with updates and
                promotions from the Beer Store.You can withdraw your consent at
                any time.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                submit(data.email);
              }}
            >
              <Text style={{ fontSize: hp("2%"), fontWeight: "bold" }}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 10,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    height: hp("6%"),
    margin: 12,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
});
