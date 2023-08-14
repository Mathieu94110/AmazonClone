import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface CategoryCardProps {
  img: string;
  text: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ img, text }) => {
  return (
    <View style={styles.categoryCard}>
      <Image style={styles.categoryCardImg} source={{ uri: img }} />
      <Text style={{ fontWeight: "600" }}>{text}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  categoryCardImg: {
    height: 60,
    width: 60,
    resizeMode: "cover",
  },
});
