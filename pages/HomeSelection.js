import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { Picker } from '@react-native-picker/picker';
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
        <Text style={styles.title}>I stay at...</Text>
        <View style={styles.spacer} />
        
        <Picker style={styles.picker}>
            <Picker.Item label="Villa Cathay Care Home" value="vcch" />
            <Picker.Item label="Canadian Care Home" value="cch" />
            <Picker.Item label="Fraser Heights Care Home" value="fhch" />
            <Picker.Item label="Meadow view Care Home" value="mch" />
        </Picker>

        <View style={styles.spacer} />
        <TouchableOpacity
            key={language}
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("NameInput", { name: "NameInput" })
            }}>
            <Text style={styles.buttonText} >Next <AiOutlineArrowRight/> </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
