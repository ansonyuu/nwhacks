import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
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
        <Text style={styles.title}>Login</Text>
        <View style={styles.spacer} />

        <Text style={globalStyles.text}>Email</Text>
        <TextInput
              style={globalStyles.textInput}
              placeholder="Email"
              placeholderTextColor="#F3BA77"
              onChangeText={(text) => this.setState({ email: text })}
              textContentType="emailAddress"
              autoCapitalize="none"
        />

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
        
      </View>
    );
  }
}
