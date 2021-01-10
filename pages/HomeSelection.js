import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { Picker } from '@react-native-picker/picker';

export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>I stay at...</Text>
        <View style={styles.spacer} />
        
        <Picker style={styles.picker}>
            <Picker.Item label="Villa Cathay Care Home" value="vcch" />
            <Picker.Item label="Canadian Care Home" value="cch" />
            <Picker.Item label="Fraser Heights Care Home" value="fhch" />
            <Picker.Item label="Meadow view Care Home" value="mch" />
            <Picker.Item label="None" value="none" />
        </Picker>

        <View style={styles.spacer} />
        <TouchableOpacity
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("NameInput", { name: "NameInput" })
            }}>
            <View>
                <Text style={styles.buttonText} >Next</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
