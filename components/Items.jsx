import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'


export default function Items({item}) {

  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container,{width}]}>
      <View style={{flex:1}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      </View>
          
          
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  description:{
    color:'white',
    textAlign:'center',
    fontSize:16,
    paddingHorizontal:64,
    paddingBottom:20
  },
  title:{
    color:'white',
    textAlign:'center',
    fontWeight:'900',
    paddingHorizontal:64,
    paddingBottom:20

  }
})