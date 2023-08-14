import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MenuItemCard from "../components/MenuItemCard";
import { categoryData } from "../data/CarouselData";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HomeTabScreenProps } from "../types";

const MenuScreen = ({ navigation }: HomeTabScreenProps<"menu">) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      header: () => (
        <View style={styles.menuScreenHeader}>
          <View style={styles.menuScreenHeaderTextInputContainer}>
            <MaterialIcons name="search" color={"gray"} size={20} />
            <TextInput
              style={styles.menuScreenHeaderTextInput}
              placeholder="Rechercher sur Amazon.fr"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.menuScreenHeaderMicIcon}>
            <MaterialIcons name="mic-none" size={26} />
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.menuScreenBody}>
      <LinearGradient colors={["rgba(5, 250, 242,0.4)", "#fff"]}>
        <View style={styles.menuScreenBodyItems}>
          {categoryData.map((data, index) => (
            <MenuItemCard key={index} title={data.text} img={data.img} />
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  menuScreenHeader: {
    backgroundColor: "rgba(5, 250, 242,0.4)",
    flexDirection: "row",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  menuScreenHeaderTextInputContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b8baba",
    margin: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    height: 40,
  },
  menuScreenHeaderTextInput: {
    outline: "none",
    width: "92%",
    height: "90%",
    borderWidth: 0,
    paddingLeft: 10,
    backgroundColor: "white",
    paddingBottom: 2,
  },
  menuScreenHeaderMicIcon: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "10%",
  },
  menuScreenBody: {
    flex: 1,
  },
  menuScreenBodyItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
});
