import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CategoryCard from "../components/CategoryCard";
import CarouselCard from "../components/CarouselCard";
import { categoryData } from "../data/CarouselData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }) => {
  useEffect(
    () =>
      navigation.setOptions({
        headerTitle: "",
        header: () => (
          <View
            style={{
              backgroundColor: "rgba(5, 250, 242,0.4)",
              flexDirection: "row",
              width: "100%",
              height: 70,
            }}
          >
            <View
              style={{
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
              }}
            >
              <MaterialIcons name="search" color={"gray"} size={20} />
              <TextInput
                style={{
                  width: "92%",
                  height: "90%",
                  borderWidth: 0,
                  paddingLeft: 10,
                  backgroundColor: "white",
                  paddingBottom: 2,
                }}
                placeholder="Rechercher sur Amazon.fr"
                placeholderTextColor="gray"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                width: "10%",
              }}
            >
              <MaterialIcons name="mic-none" size={26} />
            </View>

            <View></View>
          </View>
        ),
      }),
    [],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DeliveryAddressCard />
      <ScrollView
        style={styles.categoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categoryData.map((data, index) => (
          <CategoryCard key={index} img={data.img} text={data.text} />
        ))}
      </ScrollView>

      {/* <CarouselCard /> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dealText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  dealItemCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
