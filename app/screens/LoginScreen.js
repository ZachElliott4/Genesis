import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export const LoginScreen = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/trident.png")} />
      <Text style={styles.title}>GENESIS</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username:</Text>
        <TextInput placeholder="Username" style={styles.inputs} />
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput placeholder="Password" style={styles.inputs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#A71E34",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
    bottom: 300,
    fontSize: 30,
    fontFamily: "Apple SD Gothic Neo",
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 300,
  },
  inputContainer: {
    bottom: 200,
    justifyContent: "center",
    alignContent: "center",
  },
  inputLabel: {
    color: "white",
    padding: 10,
    fontWeight: "700",
  },
  inputs: {
    backgroundColor: "white",
    width: 400,
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});
