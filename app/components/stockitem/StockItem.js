import { View, Text } from "react-native";
import React from "react";
import styles from "./StockItem.styles";
import { getCurrentItemValue, getInvestmentItemValue } from "../../util";

export default function StockItem({ userHolding }) {
  const currentValue = getCurrentItemValue(userHolding);
  const investmentValue = getInvestmentItemValue(userHolding);
  const pnl = currentValue - investmentValue;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.symbol}>{userHolding.symbol}</Text>
          <Text style={styles.textPadding}>{userHolding.quantity}</Text>
        </View>
        <View>
          <View style={[styles.textPadding, { flexDirection: "row" }]}>
            <Text>LTP: </Text>
            <Text style={styles.ltp}>{`₹ ${userHolding.ltp}`}</Text>
          </View>
          {/* <Text>
            LTP: <Text style={styles.ltp}>{`₹ ${userHolding.ltp}`}</Text>
          </Text> */}
          <View style={[styles.textPadding, { flexDirection: "row" }]}>
            <Text>P/L </Text>
            <Text style={styles.ltp}>{`₹ ${pnl.toFixed(1)}`}</Text>
          </View>
          {/* <Text style={styles.textPadding}>
            {`P/L: `}
            <Text style={styles.ltp}>{`₹ ${pnl.toFixed(1)}`}</Text>
          </Text> */}
        </View>
      </View>
    </View>
  );
}
