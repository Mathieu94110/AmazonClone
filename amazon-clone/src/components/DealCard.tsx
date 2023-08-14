import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import React from "react";

interface DealCardProps {
  text: string;
  img: string;
}

const DealCard: React.FC<DealCardProps> = ({ text, img }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.dealCard}>
      <View style={[styles.dealCardItem, { width: width / 2 - 45 }]}>
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
    marginBottom: 5,
  },
});
