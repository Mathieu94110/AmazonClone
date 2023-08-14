import { StyleSheet, View, Image } from "react-native";
import React from "react";

interface OrderCardProps {
  image: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ image }) => {
  return (
    <View style={styles.orderCard}>
      <Image
        style={styles.orderCardImg}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  orderCard: {
    marginRight: 10,
    marginBottom: 10,
  },
  orderCardImg: {
    height: 120,
    width: 180,
    borderColor: "#b8baba",
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "white",
  },
});
