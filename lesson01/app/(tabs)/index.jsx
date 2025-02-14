import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import splashImg from "../../assets/images/mobile-space-1.jpg"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={splashImg} resizeMode='cover' style={styles.image} > 
        <Text style={styles.text}>App is awesome</Text>
      </ImageBackground>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',
  },
  image :{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});