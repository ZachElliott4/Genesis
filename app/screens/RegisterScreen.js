import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <View style={styles.fullNameContainer}>
          <View>
            <Text style={styles.inputLabelName}>First Name:</Text>
            <TextInput placeholder="First Name" style={styles.nameInputs} />
          </View>
          <View>
            <Text style={styles.inputLabelName}>Last Name:</Text>

            <TextInput placeholder="First Name" style={styles.nameInputs} />
          </View>
        </View>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput placeholder="Email" style={styles.inputs} />
        <Text style={styles.inputLabel}>Username:</Text>
        <TextInput placeholder="Username" style={styles.inputs} />
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput placeholder="Password" style={styles.inputs} />
        <Text style={styles.inputLabel}> Re-Type Password:</Text>
        <TextInput placeholder="Password" style={styles.inputs} />
      </View>
      <TouchableHighlight
        underlayColor="#A71E34"
        onPress={() => console.log("button clicked")}
        style={[styles.registerButton, styles.textContainer]}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

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
    bottom: 220,
    right: 150,
    fontSize: 30,
    fontFamily: "Apple SD Gothic Neo",
    fontWeight: "bold",
  },
  inputContainer: {
    bottom: 200,
    justifyContent: "center",
    alignContent: "center",
  },
  fullNameContainer: {
    flexDirection: "row",
  },
  inputLabelName: {
    color: "white",
    padding: 10,
    fontWeight: "700",
    flexDirection: "row",
  },
  inputLabel: {
    color: "white",
    padding: 10,
    fontWeight: "700",
  },
  nameInputs: {
    backgroundColor: "white",
    width: 200,
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  inputs: {
    backgroundColor: "white",
    width: 400,
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  registerButton: {
    width: "70%",
    height: 70,
    bottom: 150,
    backgroundColor: "#641220",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontFamily: "Apple SD Gothic Neo",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
