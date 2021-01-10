import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { AiOutlineArrowRight } from 'react-icons/fa';

export default function ({ navigation }) {

    const languages1 = ['Photography', 'Sports', 'Art']
    const languages2 = [ 'Cooking', 'Knitting', 'Writing']
    const languages3 = [ 'Knitting', 'Books', 'Gardening']

    let [fontsLoaded] = useFonts({
      Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
    }); 
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } else {    
      return (
        
        <View style={styles.container}>

        <Text style={styles.title}>Language</Text>
        <View style={styles.spacer} />
            <View style={styles.row}>

            <View>
            {languages1.map(language =>
            <View style={styles.column}>
            <TouchableOpacity
                key={language}
                style={styles.buttonLight}
                onPress={
                () => {
                    navigation.navigate("Landing", { name: "Landing" })
                }
                }
            >
                 <Text style={styles.buttonText} > {language} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}</View>

            <View>
            {languages2.map(language =>
            <View style={styles.column}>
            <TouchableOpacity
                key={language}
                style={styles.buttonLight}
                onPress={
                () => {
                    navigation.navigate("Landing", { name: "Landing" })
                }
                }
            >
                 <Text style={styles.buttonText} > {language} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}
        </View>

        <TouchableOpacity
            key={language}
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("InterestSelection", { name: "InterestSelection" })
            }}>
            <Text style={styles.buttonText} >Next <AiOutlineArrowRight/> </Text>
        </TouchableOpacity>
        
        </View>
        </View>
      );
    }
}
