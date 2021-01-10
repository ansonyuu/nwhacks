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
        <Text style={styles.title}>I am a...</Text>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={
            () => {
              navigation.navigate("HomeSelection", { name: "HomeSelection" })
            }
          }
        >
          <View>
            <Text style={styles.buttonText}>Senior</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("HomeSelection", { name: "HomeSelection" })
          }
        >
          <View>
            <Text style={styles.buttonText}>Volunteer</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
