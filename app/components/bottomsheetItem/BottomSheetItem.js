import { View, Text } from "react-native";
import React from "react";
import styles from "./BottomSheetItem.styles";

export default function BottomSheetItem({
  totalCurrentValue,
  totalInvestmentValue,
  todaysPNL,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.bold}>Current Value:</Text>
          <Text style={[styles.bold, { paddingTop: 16 }]}>
            Total Investment:
          </Text>
          <Text style={[styles.bold, { paddingTop: 16 }]}>
            Today's Prifit & Loss:
          </Text>
        </View>
        <View>
          <Text>{totalCurrentValue}</Text>
          <Text style={styles.textPadding}>{totalInvestmentValue}</Text>
          <Text style={styles.textPadding}>{todaysPNL}</Text>
        </View>
      </View>
    </View>
  );
}
