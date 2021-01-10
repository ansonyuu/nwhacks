import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { Picker } from '@react-native-picker/picker';
import { store } from '../App'

export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  console.log(store.getState())
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
    <View>
    <ImageBackground style={styles.background} source={require('../assets/HomeBackground.png')}>
      <View style={styles.container}>
        
        <Text style={styles.title}>I stay at...</Text>
        <View style={styles.spacer} />
        
        <Picker style={styles.picker}>
            <Picker.Item label="Villa Cathay Care Home" value="Villa Cathay Care Home" />
            <Picker.Item label="Canadian Care Home" value="Canadian Care Home" />
            <Picker.Item label="Fraser Heights Care Home" value="Fraser Heights Care Home" />
            <Picker.Item label="Meadow View Care Home" value="Meadow View Care Home" />
            <Picker.Item label="None of the Above" value="None of the Above" />
        </Picker>

        <View style={styles.spacer} />
        <TouchableOpacity
            style={styles.buttonNext}
            onPress={
            () => {
                navigation.navigate("NameInput", { name: "NameInput" })
            }}>
            <View>
                <Text style={styles.nextButtonText} >Next</Text>
            </View>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
