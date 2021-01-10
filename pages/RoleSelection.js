import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, ImageBackground } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { store } from "../App"


export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
    <View>
    <ImageBackground style={styles.background} source={require('../assets/PlainBackground.png')}>
      <View style={styles.container}>
        
        <Text style={styles.title}>I am a...</Text>
        <View style={styles.spacer} />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            store.dispatch({type:'setRole', value: 'Senior'})
            navigation.navigate("HomeSelection", { name: "HomeSelection" })
          }}
        >
          <View>
            <Text style={styles.buttonText}>Senior</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.spacer} />
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            store.dispatch({type:'setRole', value: 'Volunteer'})
            navigation.navigate("HomeSelection", { name: "HomeSelection" })
          }}
        >
          <View>
            <Text style={styles.buttonText}>Volunteer</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.spacer} />
        </View>
        </ImageBackground>
      </View>
      
    );
  }
}
