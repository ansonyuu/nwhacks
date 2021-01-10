import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { AiOutlineArrowRight } from 'react-icons/fa';

  

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
            key={language}
            style={styles.buttonNext}
            onPress={
            () => {
                navigation.navigate("PracticeSelection", { name: "PracticeSelection" })
            }}>
            <Text style={styles.buttonText} >Next <AiOutlineArrowRight/> </Text>
        </TouchableOpacity>
        </View>
      );
    }
}
