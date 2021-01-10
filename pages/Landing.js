import React from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
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

      <View>
        <ImageBackground style={styles.background} source={require('../assets/LoginBackground.png')}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.spacer} />
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => {
                  console.log("this works", navigation)
                navigation.navigate("RoleSelection", { name: "RoleSelection" })
              }
            }
          >
            <View>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("RoleSelection", { name: "RoleSelection" })
            }
          >
            <View>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
