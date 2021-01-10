import React from "react";
import { View, Text, TouchableOpacity, Icon } from "react-native";
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
        
        <TouchableOpacity
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("Loading", { name: "Loading" })
            }}>
            <View>
                <Text style={styles.buttonText} >Next</Text>
                 {/* <Icon name="arrow-right" type="feather"/>  */}
            </View>
        </TouchableOpacity>
        
    </View>)
  }
}
