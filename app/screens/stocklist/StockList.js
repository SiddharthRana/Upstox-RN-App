import { View, Text, ActivityIndicator } from "react-native";
import Header from "../../components/header/Header";
import StockItem from "../../components/stockitem/StockItem";
import styles from "./StockList.styles";

export default function StockList({ data, isLoading, error }) {
  return (
    <View>
      <Header title="Upstox Holding" />
      <View>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((userHolding, index) => (
            <StockItem key={index} userHolding={userHolding} />
          ))
        )}
      </View>
    </View>
  );
}
