import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";

export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return ( 
    <View style={styles.container}>
        <Text style={styles.title}>Loading Call...</Text>
    </View>)
  }
}
