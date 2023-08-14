import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CartItem from "../components/CartItem";
import { HomeTabScreenProps } from "../types";

const CartScreen = ({ navigation }: HomeTabScreenProps<"cart">) => {
  useEffect(
    () =>
      navigation.setOptions({
        headerTitle: "",
        header: () => (
          <View style={styles.cartScreenHeader}>
            <View style={styles.cartScreenHeaderContent}>
              <MaterialIcons name="search" color={"gray"} size={20} />
              <TextInput
                style={styles.cartScreenHeaderTextInput}
                placeholder="Rechercher sur Amazon.fr"
                placeholderTextColor="gray"
              />
            </View>

            <View style={styles.cartScreenHeaderMicIconContainer}>
              <MaterialIcons name="mic-none" size={26} color={"#fff"} />
            </View>
          </View>
        ),
      }),
    [navigation],
  );

  return (
    <View style={styles.cartScreenBody}>
      <DeliveryAddressCard />
      <View style={styles.cartScreenSubContainer}>
        <Text style={styles.cartScreenTitleText}>Total TTC</Text>
        <Text style={styles.cartScreenPriceText}>1398.00 €</Text>
      </View>
      <View style={styles.cartScreenDeliveryContainer}>
        <View style={styles.cartScreenDeliveryIconContainer}>
          <MaterialIcons
            name="verified"
            color={"teal"}
            size={20}
            style={{ backgroundColor: "white" }}
          />
        </View>
        <View style={styles.cartScreenDeliveryTextContainer}>
          <Text style={{ color: "teal" }}>
            Les frais de livraison vous sont actuellement offert pour cette commande
          </Text>
        </View>
      </View>
      <View style={styles.cartScreenBuyBtn}>
        <Pressable style={styles.cartScreenBtnContainer}>
          <Text style={styles.cartScreenBtnText}>Procéder à l'achat des 2 produits</Text>
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <CartItem />
        <CartItem />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreenHeader: {
    backgroundColor: "#232f3e",
    flexDirection: "row",
    width: "100%",
    height: 70,
  },
  cartScreenHeaderContent: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b8baba",
    margin: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    height: 40,
  },
  cartScreenHeaderTextInput: {
    outline: "none",
    width: "92%",
    height: "90%",
    borderWidth: 0,
    paddingLeft: 10,
    backgroundColor: "white",
    paddingBottom: 2,
  },
  cartScreenHeaderMicIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "10%",
  },
  cartScreenBody: {
    flex: 1,
  },
  cartScreenSubContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cartScreenTitleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  cartScreenPriceText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
  cartScreenDeliveryContainer: {
    padding: 10,
    flexDirection: "row",
  },
  cartScreenDeliveryIconContainer: {
    width: "10%",
  },
  cartScreenDeliveryTextContainer: {
    width: "90%",
  },
  cartScreenBtnContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  cartScreenBtnText: {
    fontWeight: "600",
  },
  cartScreenBuyBtn: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});
