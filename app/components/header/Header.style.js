import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: Platform.OS === "android" ? 90 : 60,
    paddingLeft: 16,
    justifyContent: "center",
    backgroundColor: "#371f76",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
