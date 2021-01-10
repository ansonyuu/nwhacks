import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";

export default function ({ navigation }) {

    const languages1 = ['普通話', '廣東話', 'Français', '日本人']
    const languages2 = [ '한국어', 'Tagalog', 'Deutsche', 'Español']
    const languages3 = [ 'हिंदी', 'Tiếng Việt', 'Português', 'Italiano']

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

            <View>
                {languages3.map(language =>
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
                </View>
                </View>
            </ImageBackground>
        </View>

      );
    }
}
