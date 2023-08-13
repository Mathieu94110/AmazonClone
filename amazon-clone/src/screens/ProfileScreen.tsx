import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileCard from "../components/ProfileCard";
import { LinearGradient } from "expo-linear-gradient";
import OrderCard from "../components/OrderCard";
import AccountCard from "../components/AccountCard";
import { infoData, OrderData, WishListData } from "../data/ProfileData";
import { UserInfo } from "../types/user";

const ProfileScreen = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  useEffect(() => {
    setUserInfo(route.params);
  }, []);

  useEffect(() =>
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Image
          source={{
            uri: "https://www.clai-communications.com/wp-content/uploads/2020/11/amazon-logo-png-amazon-logo-transparent-11563090659nn2isevb5y.png",
          }}
          style={{ height: 30, width: 90, marginLeft: 10, backgroundColor: "" }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <MaterialIcons name="notifications-none" size={26} style={{ marginRight: 5 }} />
          <MaterialIcons name="search" size={26} />
        </View>
      ),
      headerStyle: {
        backgroundColor: "rgba(5, 250, 242,0.4)",
        borderBottomWidth: 0,
      },
    }),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <LinearGradient colors={["rgba(5, 250, 242,0.4)", "#fff"]}>
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Bonjour, {`${userInfo?.given_name}`}</Text>
          <Image
            source={{
              uri: userInfo?.picture,
            }}
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 50,
            }}
          />
        </View>
        <View style={styles.actionCont}>
          {infoData.map((data, index) => (
            <ProfileCard key={index} title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Vos commandes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {OrderData.map((data, index) => (
            <OrderCard key={index} image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Vos favoris</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {WishListData.map((data, index) => (
            <OrderCard key={index} image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Vos informations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.keys(userInfo).map((info, index) => (
            <AccountCard key={index} title={info} value={userInfo[info]} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  actionCont: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  orderCont: {
    marginTop: 15,
    borderBottomColor: "#b8baba",
    borderBottomWidth: 3,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  orderText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
});
