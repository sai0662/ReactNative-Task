import { StyleSheet, Text, View,useWindowDimensions,Animated } from 'react-native'
import React from 'react'

export default function Paginator({data, scrollX}) {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection:'row',height:80}}>
     {data.map((_,i)=>{
      const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
      
      const dotWidth = scrollX.interpolate({
        inputRange,
        outputRange:[10,20,10],
        extrapolate:'clamp',
      })
      

      return <Animated.View style={[styles.dot,{width:dotWidth}]} key={i.toString()}/>;
     })}
    </View>
  )
}

const styles = StyleSheet.create({ 
  dot:{
    height:8,
    borderRadius:5,
    backgroundColor:'white',
    marginHorizontal:8,
  }
})