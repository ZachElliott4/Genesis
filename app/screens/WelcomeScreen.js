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
        fontSize: 28,
        fontFamily: 'Apple SD Gothic Neo'
    },
    logo:{
        width: 150,
        height: 150,
        bottom: 300,
    },
    loginButton:{
        width:'100%',
        height:80,
        backgroundColor:"#595959",
    },
    registerButton:{
        width:'100%',
        height:80,
        backgroundColor:"#7f7f7f",
    },
    text:{
        color: 'white',
        fontSize: 24,
        fontFamily: 'Apple SD Gothic Neo'
    },
    textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    }

});
