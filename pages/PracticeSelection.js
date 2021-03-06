import React from "react";
import { View, Text, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import { store } from '../App'
 

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
        <View>
        <ImageBackground style={styles.background} source={require('../assets/PracticeBackground.png')}>
        <View style={styles.container}>

        
            <Text style={styles.title}>What language do you want to practice?</Text>
            <View style={styles.spacer} />
            <Text style={styles.subtitle}>You will be matched with people who speak the same language</Text>
            <View style={styles.spacer} />
                <View style={styles.row}>

                <View>
                {languages1.map(language =>
                <View style={styles.column}>
                <TouchableHighlight
                    key={language}
                    style={styles.buttonLight}
                    onPress={
                    () => {
                        store.dispatch({type:'setPractice', value: language})
                    }
                    }
                >
                    <Text style={styles.smallButtonText} > {language} </Text>
                </TouchableHighlight>
                <View style={styles.spacer} />
                </View >
                )}</View>

                <View>
                {languages2.map(language =>
                <View style={styles.column}>
                <TouchableHighlight
                    key={language}
                    style={styles.buttonLight}
                    onPress={
                    () => {
                        store.dispatch({type:'setPractice', value: language})
                    }
                    }
                >
                    <Text style={styles.smallButtonText} > {language} </Text>
                </TouchableHighlight>
                <View style={styles.spacer} />
                </View >
                )}
            </View>

            <View>
                {languages3.map(language =>
                <View style={styles.column}>
                    <TouchableHighlight
                        key={language}
                        style={styles.buttonLight}
                        onPress={
                        () => {
                            store.dispatch({type:'setPractice', value: language})
                        }
                        }
                    >
                        <Text style={styles.smallButtonText} > {language} </Text>
                    </TouchableHighlight>
                    <View style={styles.spacer} />
                    </View >
                    )}
                    </View>
            </View>

            <TouchableOpacity

                style={styles.buttonNext}
                onPress={
                () => {
                    navigation.navigate("InterestSelection", { name: "InterestSelection" })
                }}>
                <View>
                    <Text style={styles.nextButtonText} >Next</Text>
                    {/* <Icon name="arrow-right" type="feather"/>  */}
                </View>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>


      );
    }
}
