import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import styles from "./Header.style";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
