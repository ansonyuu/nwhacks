import { StyleSheet } from 'react-native';


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
      paddingVertical: 20,
      width: 350,
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

    smallButtonText: {
        color: '#906A55',
        fontFamily: 'Karla',
        fontSize: 1.5 + 'rem'
    },

    nextButtonText: {
        color: '#242424',
        fontFamily: 'Karla',
        fontSize: 2 + 'rem'
    },

    buttonLight: {
        zIndex: 10,

        borderColor: '#906A55',
        borderWidth: 5,
        paddingVertical: 30,
        width: 250,
        height: 75,
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

    buttonNext: {
        zIndex: 10,

        backgroundColor: '#F5F6F1',
        borderWidth: 0,
        paddingVertical: 30,
        width: 250,
        height: 75,
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

    picker: {
        backgroundColor: '#F5F6F1',
        fontFamily: 'Karla',
        fontSize: 2 + 'rem',
        borderWidth: 0,
        padding: 10,
        zIndex: 10,
        width: 500,
        height: 100,
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
    },

    input: {
        backgroundColor: '#F5F6F1',
        fontFamily: 'Karla',
        fontSize: 2 + 'rem',
        borderWidth: 0,
        borderBottomWidth: 5,
        borderColor: '#906A55',
        padding: 10,
        zIndex: 10,
        width: 500,
        height: 100,
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
    },

    spacer: {
        height: 2 + 'rem'
    },

    title: {
        color: '#000',
        fontFamily: 'Karla',
        fontSize: 2.5 + 'rem'
    },

    subtitle: {
        color: '#000',
        fontFamily: 'Karla',
        fontSize: 1.5 + 'rem'
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 10
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        
    },

    imageRight: {
        alignContent: 'center',
        height: '30vh',
        width: 'auto'
        
    },

    imageLeft: {
        alignContent: 'center',
        height: '30vh',
        width: 'auto'
    }
});
  
export default styles;