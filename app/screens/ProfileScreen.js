import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.followCount}>
          <Text>Following</Text>
          <Text>100</Text>
        </View>
        <View style={styles.profilePicView}>
          <Image
            style={styles.profilePic}
            source={require("../assets/profilepic.png")}
          />
        </View>
        <View style={styles.followCount}>
          <Text>Followers</Text>
          <Text>100</Text>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>Tom Jones</Text>
        <Text style={styles.userDescription}>
          I love working out and meeting new people. One day i hope to join the
          100kg club so i can be with my friend Paul.
        </Text>
        <View style={styles.skillBadge}></View>
      </View>
      <View style={styles.profileNav}>
        <Button style={styles.profileNavButton} title="Posts"></Button>
        <Button style={styles.profileNavButton} title="Info"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    margin: 100,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    margin: 20,
  },
  followCount: { padding: 30, alignItems: "center", fontWeight: "800" },
  profilePicView: {},
  profilePic: { borderRadius: 100, width: 100, height: 100 },
  profileInfo: { alignItems: "center" },
  userName: { fontWeight: "900" },
  userDescription: {},
  skillsBadge: {
    borderColor: "black",
  },
  profileNav: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  profileNavButton: {
    borderColor: colors.primary,
    borderWidth: 20,
  },
});
