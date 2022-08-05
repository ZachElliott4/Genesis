import { StyleSheet, Text, View, Image } from 'react-native';


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/trident.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#A71E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
  },
  logo:{
    width: 150,
    height: 150,
  }
});
