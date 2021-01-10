import React from "react";
import { View, Text, TouchableOpacity, Icon } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
 

export default function ({ navigation }) {

    const interest1 = ['Photography', 'Sports', 'Art']
    const interest2 = [ 'Cooking', 'Knitting', 'Writing']
    const interest3 = [ 'Knitting', 'Books', 'Gardening']

    let [fontsLoaded] = useFonts({
      Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
    }); 
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    } else {    
      return (
        
        <View style={styles.container}>


        <Text style={styles.title}>What are some things you like?</Text>
        <View style={styles.spacer} />
        <Text style={styles.subtitle}>You will be matched with people with similar interests!</Text>

        <View style={styles.spacer} />
            <View style={styles.row}>

            <View>
            {interest1.map(interest =>
            <View style={styles.column}>
            <TouchableOpacity
                key={interest}
                style={styles.buttonLight}
                onPress={
                () => {
                    navigation.navigate("Landing", { name: "Landing" })
                }
                }
            >
                 <Text style={styles.buttonText} > {interest} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}</View>

            <View>
            {interest2.map(interest =>
            <View style={styles.column}>
            <TouchableOpacity
                key={interest}
                style={styles.buttonLight}
                onPress={
                () => {
                    navigation.navigate("Landing", { name: "Landing" })
                }
                }
            >
                 <Text style={styles.buttonText} > {interest} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}
        </View>

        <View>
            {interest3.map(interest =>
            <View style={styles.column}>
            <TouchableOpacity
                key={interest}
                style={styles.buttonLight}
                onPress={
                () => {
                    navigation.navigate("Loading", { name: "Loading" })
                }
                }
            >
                 <Text style={styles.buttonText} > {interest} </Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            </View >
            )}
        </View>
        </View>

        <TouchableOpacity
            style={styles.buttonLight}
            onPress={
            () => {
                navigation.navigate("Review", { name: "Review" })
            }}>
            <View>
                <Text style={styles.buttonText} >Next</Text>
                 {/* <Icon name="arrow-right" type="feather"/>  */}
            </View>
        </TouchableOpacity>

        </View>
      );
    }
}
