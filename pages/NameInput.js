import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { store } from "../App"
  

export default function ({ navigation }) {


    let [fontsLoaded] = useFonts({
      Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
    }); 
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View>
        <ImageBackground style={styles.background} source={require('../assets/PlainBackground.png')}>
        <View style={styles.container}>

        
            <View>
          <Text style={styles.title}>What is your name?</Text>
          <View style={styles.spacer} />

          <TextInput
            style={styles.input}
            onChangeText={(text) => store.dispatch({type:'setName', value: text})}
        />
        <View style={styles.spacer} />
            <TouchableOpacity
            style={styles.buttonNext}
            onPress={
            () => {
                navigation.navigate("PracticeSelection", { name: "PracticeSelection" })
            }}>
            <View>
                <Text style={styles.nextButtonText} >Next</Text>
                
            </View>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        </View>
      );
    }
}
