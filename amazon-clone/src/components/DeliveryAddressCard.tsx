import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DeliveryAddressCard: React.FC = () => {
  return (
    <View style={styles.deliveryAddress}>
      <MaterialIcons name="location-pin" size={20} color={"#fff"} />
      <Text style={styles.deliveryAddressText}>Indiquer une adresse de livraison</Text>
      <MaterialIcons name="keyboard-arrow-down" size={20} color={"#fff"} />
    </View>
  );
};

export default DeliveryAddressCard;

const styles = StyleSheet.create({
  deliveryAddress: {
    backgroundColor: "#2c3f5e",
    flexDirection: "row",
    padding: 10,
  },
  deliveryAddressText: {
    fontWeight: "600",
    color: "#fff",
  },
});
