import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ImageBackground,
  Alert ,
  ScrollView
} from "react-native";
import bgImage from "../assets/bg.png";
import Feather from 'react-native-vector-icons/Feather';



export default function Login({navigation}) {

  // const [userMail, setuserMail] = useState("");
  // const [password, setPassword] = useState("");



  const isValidEmail = (val)=>{
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(val)
  }
  const isValidPassword = (val)=>{
    const regx = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regx.test(val)
  }
 
  const submit = (email,password) =>{
    if(email === "sait0662@gmail.com" && password === "Psaiteja@123")  {
      navigation.navigate("Dashboard");
    }else{
      Alert.alert("enter valid mail or password")
    }

    // if(!isValidEmail(email))
    // {
    //   return  Alert.alert("enter valid mail or password")
    // }
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
    // if(val.trim().length >= 4){
      if(isValidEmail(val)){
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

  const handlePasswordChange = (val) =>{
    // if(val.trim().length >= 6){
      if(isValidPassword(val)){
      setData({
        ...data,
        password:val,
        isValidPassword:true,
      })
    }else{
      setData({
        ...data,
        password:val,
        isValidPassword:false,
      })
    }
  }

  // const handleValidEmail = (val) =>{
  //       if(val.trim().length >= 4){
  //         setData({
  //           ...data,
  //           isValidEmail:true, 
  //         });
  //       }else{
  //         setData({
  //           ...data,
  //           isValidEmail:false,
  //         })
  //       }
  // }



  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.container}
      >
        <View
          style={{ flex:1, flexDirection: "row", alignItems: "center" }}
        >
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
              fontSize:hp('4%') ,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
          <Text style={{ padding: 6, color: "white", fontSize: hp('2%') }}>
            its time to rock n roll! Let's get started now.
          </Text>
        </View>
        <View style={styles.footer}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              autoCapitalize="none"
              onChangeText = {(val)=> textInputChange(val)}
             // onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
            />
            {data.isValidEmail ? null :
            <Text style={{color:'red'}}>Enter Valid Email</Text>
            } 
         
            <TextInput
              style={styles.input}  
              placeholder="Password"
              autoCapitalize="none"
             // secureTextEntry={true}
             onChangeText = {(val)=> handlePasswordChange(val)}
            
            />
           
            {data.isValidPassword ? null :
        <Text style={{color:'red'}}>password must be 8 characters  and 1 Uppercase and 1 Special character and 1 Number should be there</Text>
            }
            <View style={{ padding: 5, alignItems: "flex-end" }}>
              <Text style={{ padding: 8 }}>Forgot Password?</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button}
            //onPress={() =>submit()}
            onPress={() => {submit( data.email, data.password )}}
            >
              <Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                
              }}
            >
              <Text style={{ fontSize: hp('2%'), color: "grey" }}>or login with </Text>
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
              <Text style={{fontSize: hp('2%'),fontWeight:'bold',padding:5}}>Goggle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
            <Image source={require("../assets/Facebook.png")} />
              <Text style={{fontSize: hp('2%'),fontWeight:'bold',padding:5}}>Facebook</Text>
            </TouchableOpacity>
            </View>
            <View style={{borderWidth:1,borderColor:'#E8E8E8',margin:30}}>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{ color: "orange" }}  onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "#D3D3D3" }}>
                  New to The Beer Store?{" "}
                </Text>
                Create an account
              </Text>      
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("92%"),
    width: wp("100%"),
    backgroundColor: "white",
  },
header: {
    flex: 1,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footer: {
    height: hp("68%"),
    width: wp("100%"),
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    margin:10,
    borderRadius: 10,
    borderWidth:1,
    flexDirection:'row',
    height: hp("7%"),
    width: wp("40%"),
    justifyContent:'space-around',
    borderColor:'#E5E5E5'
  },
  input: {
    height: hp("6%"),
    margin: 6,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 8,
    borderRadius: 5,
    backgroundColor:'#F5F5F5'
  },
});
