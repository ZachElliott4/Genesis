import { TextInput, View, StyleSheet, Text, SafeAreaView } from "react-native";

function LoginScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <View style={styles.logoContainer}></View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TextInput />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#A71E34",
    flex: 1,
  },
});

export default LoginScreen;
