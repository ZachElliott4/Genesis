import { StyleSheet, Text, View, Image } from 'react-native';


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/trident.png')} />
        <Text style={styles.title}>GENESIS</Text>
        <View style={[styles.loginButton, styles.textContainer]}>
            <Text style={styles.text}>New Profile</Text>
        </View>
        <View style={[styles.registerButton, styles.textContainer]}>
            <Text style={styles.text}>Existing User</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#A71E34',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title:{
        color: 'white',
        bottom: 300,
        fontSize: 30,
        fontFamily: 'Apple SD Gothic Neo',
        fontWeight: 'bold',
    },
    logo:{
        width: 150,
        height: 150,
        bottom: 300,
    },
    loginButton:{
        width:'70%',
        height:70,
        backgroundColor:"#641220",
        bottom: 150,
        margin: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#fff",
    },
    registerButton:{
        width:'70%',
        height:70,
        backgroundColor:"#641220",
        bottom: 150,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#fff",

    },
    text:{
        color: 'white',
        fontSize: 26,
        fontFamily: 'Apple SD Gothic Neo',
        fontWeight: 'bold',
    },
    textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    }

});
