import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import bgImage from "../assets/bg.png";

export default function Register({ navigation }) {
 // const [userMail, setuserMail] = useState("");

  const submit = (email) =>{
    if(email === "saiteja")  {
      Alert.alert("Successfully Created Account")
      navigation.navigate("Login");
    }else{
      Alert.alert("enter valid mail")
    }
  };

  const [data,setData] = React.useState({
    email:'',
    password:'',
    check_textInputChange : false,
    secureTextEntry:true,
    isValidEmail:true,
    isValidPassword:true,  
  }) 

  const textInputChange = (val) =>{
    if(val.trim().length >= 4){
      setData({
        ...data,
        email:val,
        check_textInputChange:true,
        isValidEmail:true,
      })
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false,
        isValidEmail:false,
      })
    }
  }

  const handleValidEmail = (val) =>{
    if(val.trim().length >= 4){
      setData({
        ...data,
        isValidEmail:true, 
      });
    }else{
      setData({
        ...data,
        isValidEmail:false,
      })
    }
}

  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../assets/back.png")} />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image source={require("../assets/brandLogo.png")} />
          </View>
        </View>
        <View style={styles.header}>
          <Text
            style={{
              padding: 2,
              color: "white",
              fontSize: hp('4%'),
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
          <Text style={{ padding: 5, color: "white", fontSize: hp('2%')}}>
            Create an account so you can order your favourite beer even faster.
          </Text>
        </View>
        <View style={styles.footer}>
          <View>
            <TextInput style={styles.input} 
            placeholder="Email Address"
            autoCapitalize="none"
            onChangeText = {(val)=> textInputChange(val)}
            onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
            />
          </View>
          {data.isValidEmail ? null :
            <Text style={{color:'red'}}>Enter Valid Email</Text>
            } 
          <View>
            <TouchableOpacity style={styles.button}
            // onPress={() =>submit()}
            onPress={() => {submit( data.email)}}
            >
              <Text style={{ fontSize:hp('2%'), fontWeight: "bold" }}>
                CREATE AN ACCOUNT
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize:hp('2%'), color: "#D3D3D3" }}>
                or login with
              </Text>
            </View>
            <View
              style={{
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity style={styles.buttons}>
                <Image source={require("../assets/Google.png")} />
                <Text style={{ fontSize:  hp('2%'), fontWeight: "bold", padding: 5 }}>
                  Goggle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require("../assets/Facebook.png")} />
                <Text style={{ fontSize: hp('2%'), fontWeight: "bold", padding: 5 }}>
                  Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "#D3D3D3" }}>
                By registering, I agree to the Beer Store's
              </Text>
              <Text
                style={{
                  color: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >       
                Terms & Conditions <Text style={{ color: "#D3D3D3" }}>and</Text>{" "}
                Privacy Policy
              </Text>
            </View>
            <View
              style={{ borderWidth: 1, borderColor: "#E8E8E8", margin: 30 }}
            ></View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ color: "orange" }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={{ color: "#D3D3D3" }}>
                  Already have an account?{" "}
                </Text>
                Login
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("92%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    padding: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footer: {
    height: hp("60%"),
    width: wp("100%"),
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    height: hp("7%"),
    width: wp("40%"),
    justifyContent: "space-around",
    borderColor: "#E5E5E5",
  },
  input: {
    height: hp("6%"),
    margin: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
  },
});
