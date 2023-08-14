import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MenuItemCard = ({ title, img }) => {
  return (
    <View style={styles.menuItemCard}>
      <View>
        <Text style={styles.menuItemCardText}>{title}</Text>
        <Image
          style={styles.menuItemCardImg}
          source={{
            uri: img,
          }}
        />
      </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  menuItemCard: {
    height: 150,
    width: 130,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
    margin: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  menuItemCardText: {
    fontWeight: "600",
    paddingLeft: 8,
    paddingTop: 5,
  },
  menuItemCardImg: {
    height: 132,
    width: "100%",
    resizeMode: "contain",
  },
});
