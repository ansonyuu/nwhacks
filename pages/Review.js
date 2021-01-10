import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { AiOutlineArrowRight } from 'react-icons/fa';

export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return ( 
    <View style={styles.container}>
        
        <TouchableOpacity
            key={language}
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("InterestSelection", { name: "InterestSelection" })
            }}>
            <Text style={styles.buttonText} >Next <AiOutlineArrowRight/> </Text>
        </TouchableOpacity>
        
    </View>)
  }
}
