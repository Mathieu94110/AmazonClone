import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DeliveryAddressCard = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" size={20} color={"#fff"} />
      <Text style={styles.deliverText}>Indiquer une adresse de livraison</Text>
      <MaterialIcons name="keyboard-arrow-down" size={20} color={"#fff"} />
    </View>
  );
};

export default DeliveryAddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3f5e",
    flexDirection: "row",
    padding: 10,
  },
  deliverText: {
    fontWeight: "600",
    color: "#fff",
  },
});
