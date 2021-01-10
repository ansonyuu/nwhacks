import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button: {
        zIndex: 10,
      backgroundColor: '#EFDFBB',
      paddingVertical: 30,
      width: 400,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,

    '&:hover': {
        backgroundColor: '#000',
    },
    },

    buttonText: {
        color: '#906A55',
        fontFamily: 'Karla',
        fontSize: 2 + 'rem'
    },

    spacer: {
        height: 2 + 'rem'
    },

    title: {
        color: '#000',
        fontFamily: 'Karla',
        fontSize: 2.5 + 'rem'
    }
});
  
export default styles;