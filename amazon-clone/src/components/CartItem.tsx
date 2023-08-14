import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CartItem: React.FC = () => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemTopContainer}>
        <View style={styles.cartItemImageContainer}>
          <Image
            style={styles.cartItemTopContainerImg}
            source={{
              uri: "https://m.media-amazon.com/images/I/61O0rXhhP6L._SL1500_.jpg",
            }}
          />
        </View>
        <View style={styles.cartItemTextContent}>
          <Text style={styles.cartItemTitle}>
            Casque de jeu Redgear Cape Wired RGB filaire sur l'oreille avec micro pour PC
          </Text>
          <Text style={styles.cartItemPrice}>699 €</Text>
          <Text>Eligible pour les frais de livraison offert</Text>
        </View>
      </View>
      <View style={styles.cartItemBottomContainer}>
        <View style={styles.cartItemLeftIcons}>
          <MaterialIcons style={styles.cartItemDeleteIcon} name="delete-outline" size={22} />
          <Text style={styles.cartItemCountText}>1</Text>
          <MaterialIcons style={styles.cartItemAddIcon} name="add" size={22} />
        </View>
        <View style={styles.cartItemActionContainer}>
          <Pressable style={styles.cartItemActionButtons}>
            <Text>Supprimer</Text>
          </Pressable>
          <Pressable style={styles.cartItemActionButtons}>
            <Text>Savegarder pour plus tard</Text>
          </Pressable>
          <Pressable style={styles.cartItemActionButtons}>
            <Text>Voir d'autres</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    borderBottomColor: "white",
    borderBottomWidth: 10,
    backgroundColor: "#ededed",
  },
  cartItemTopContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  cartItemImageContainer: {
    flex: 1,
  },
  cartItemTopContainerImg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
  cartItemTextContent: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
  },
  cartItemTitle: {
    flex: 1,
    fontWeight: "600",
  },
  cartItemPrice: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  cartItemBottomContainer: {
    flexDirection: "row",
    padding: 10,
    flex: 1,
  },
  cartItemLeftIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemDeleteIcon: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    backgroundColor: "#e6e5e3",
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  cartItemAddIcon: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    backgroundColor: "#e6e5e3",
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  cartItemActionButtons: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  cartItemCountText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
  },
  cartItemActionContainer: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
