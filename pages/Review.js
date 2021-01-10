import React from "react";
import { View, Text, TouchableOpacity, Icon } from "react-native";
import styles from "../components/GlobalStyles";
import { useFonts } from "expo-font";
import axios from 'axios'
import { store } from '../App'
 

const submit = profile => {
    const name = store.name
    const role = ""
    const careHome = ""
    const interests = "cats, dogs"
    const languages = ""

    axios
      .get(
        `https://fadasdas.herokuapp.com/database/updateuser/name=${name}/role=${role}/careHome=${carehome}/interests=${interests}/languages=${languages}`
      )
      .then((response) => {
        const status = response.status;
        const data = response.data;
        console.log(status, data);
      })
      .catch((error) => {
        // shit went wrong lmao
      });
  }


export default function ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Review your Profle</Text>;
  } else {
    return ( 
    <View style={styles.container}>
        

        <TouchableOpacity
            style={styles.buttonNext}
            onPress={
            () => {
                navigation.navigate("Loading", { name: "Loading" })
            }}>
            <View>
                <Text style={styles.subtitle}>Name: </Text>
                 {/* <Icon name="arrow-right" type="feather"/>  */}
            </View>
        </TouchableOpacity>
        
    </View>)
  }
}
