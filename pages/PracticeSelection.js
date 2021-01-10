import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { AiOutlineArrowRight } from 'react-icons/fa';

export default function ({ navigation }) {

    const languages1 = ['普通話 (Mandarin)', '廣東話 (Cantonese)', 'Français (French)', '日本人 (Japanese)']
    const languages2 = [ '한국어 (Korean)', 'Tagalog (Filipino)', 'Deutsche (German)', 'Español (Spanish)']
    const languages3 = [ 'हिंदी (Hindi)', 'Tiếng Việt (Vietnamese)', 'Português (Portugeuse)', 'Italiano (Italian)']

    let [fontsLoaded] = useFonts({
      Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
    }); 
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } else {    
      return (
        
        <View style={styles.container}>

        <Text style={styles.title}>What language do you want to practice?</Text>
        <View style={styles.spacer} />
        <Text style={styles.subtitle}>You will be matched with people who speak the same language</Text>
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
                    navigation.navigate("InterestSelection", { name: "InterestSelection" })
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
                    navigation.navigate("InterestSelection", { name: "InterestSelection" })
                }
                }
            >
                 <Text style={styles.buttonText} > {language} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}
        </View>

        <View>
            {languages3.map(language =>
            <View style={styles.column}>
                <TouchableOpacity
                    key={language}
                    style={styles.buttonLight}
                    onPress={
                    () => {
                        navigation.navigate("InterestSelection", { name: "InterestSelection" })
                    }
                    }
                >
                    <Text style={styles.buttonText} > {language} </Text>
                </TouchableOpacity>
                <View style={styles.spacer} />
                </View >
                )}
                </View>
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


      );
    }
}
