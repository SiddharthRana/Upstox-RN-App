import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBlockColor: "#D3D3D3",
    padding: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ltp: {
    fontWeight: "700",
  },
  textPadding: {
    paddingTop: 8,
  },
});

export default styles;
