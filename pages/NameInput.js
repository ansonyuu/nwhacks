import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";

  

export default function ({ navigation }) {

    const [value, onChangeText] = React.useState();

    let [fontsLoaded] = useFonts({
      Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
    }); 
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>What is your name?</Text>
          <View style={styles.spacer} />

          <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
        />
        <View style={styles.spacer} />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("LanguageSelection", { name: "LanguageSelection" })
            }
          >
            <View>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}
