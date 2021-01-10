import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../components/GlobalStyles'
import { useFonts } from 'expo-font';

export default function ({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Karla': require('../assets/fonts/Karla-SemiBold.ttf'),
      });

      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      } else {
        return (
            <View style={styles.container}>
                
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.spacer}/>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('RoleSelection', { name: 'RoleSelection' })
              }
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.spacer}/>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('RoleSelection', { name: 'RoleSelection' })
              }
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      );
    }
  };
