import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={style.container}>
      <Image style={style.imagem} source={require('../Images/books.jpg')} />
    </View>
  );
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  imagem: { 
    width: 300, 
    height: 300, 
    borderRadius: 5 },
});
