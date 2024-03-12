import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useCallback } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import StockList from "./stocklist/StockList";
import BottomSheetItem from "../components/bottomsheetItem/BottomSheetItem";
import {
  getTotalCurrentValue,
  getTotalInvestmentValue,
  getTodaysPNLValue,
} from "../util";
import useFetch from "../../hook/useFetch";

export default function UpstoxApp() {
  const { data, isLoading, error } = useFetch();
  let totalCurrentValue = getTotalCurrentValue(data);
  let totalInvestmentValue = getTotalInvestmentValue(data);
  let todaysPNL = getTodaysPNLValue(data);
  let totalPNL = totalCurrentValue - totalInvestmentValue;
  const snapPoints = useMemo(() => ["12%", "28%"], []);
  const bottomSheetRef = useRef(null);
  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        <StockList data={data} isLoading={isLoading} error={error} />
        <StatusBar style="auto" />
      </View>
      <BottomSheet snapPoints={snapPoints} ref={bottomSheetRef}>
        <BottomSheetItem
          totalCurrentValue={totalCurrentValue}
          totalInvestmentValue={totalInvestmentValue}
          todaysPNL={todaysPNL}
        />
      </BottomSheet>
      <TouchableOpacity onPress={handleSnapPress}>
        <View style={styles.bottomView}>
          <View style={styles.row}>
            <Text style={styles.bold}>Profit & Loss:</Text>
            <Text>{totalPNL.toFixed(1)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
  },
  bottomView: {
    backgroundColor: "white",
    height: 60,
    padding: 8,
  },
});
