import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

let dimension = Dimensions.get("window").width;
const DealCard = ({ text, img }) => {
  return (
    <View style={styles.dealCard}>
      <View style={styles.dealCardItem}>
        <Image source={{ uri: img }} style={styles.dealCardImage} />
        <Text style={styles.dealCardText}>{text}</Text>
      </View>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  dealCard: {
    padding: 15,
    paddingTop: 0,
    overflow: "hidden",
  },
  dealCardImage: {
    height: 100,
    resizeMode: "contain",
  },
  dealCardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },

  dealCardItem: {
    width: dimension / 2 - 45,
    marginBottom: 5,
  },
});
