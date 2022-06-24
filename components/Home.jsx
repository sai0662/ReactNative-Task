import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  SliderBase,
  SafeAreaView,
  Button,
  useWindowDimensions,
  Animated,
  Alert,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useRef } from "react";

import slides from "../slides";
import bgImage from "../assets/bg.png";
import Items from "./Items";
import Paginator from "./Paginator";

export default function Home({navigation}) {


  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.container}
      >
        <Text style={styles.skip}>SKIP LOGIN</Text>

        <FlatList
          style={{ paddingTop: 100 }}
          data={slides}
          renderItem={({ item }) => <Items item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
        />

        <Paginator data={slides} scrollX={scrollX} />
        <View style={{ width:"100%",}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <View style={{ padding: 30, paddingLeft: 40 }}>
            <Text
              style={{ color: "orange" }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ color: "white" }}>New to The Beer Store? </Text>
              Create an account
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  skip: {
    color: "white",
    padding: 60,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 14,
    borderRadius: 10,
  },
});
