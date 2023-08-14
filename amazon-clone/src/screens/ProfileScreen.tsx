import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileCard from "../components/ProfileCard";
import { LinearGradient } from "expo-linear-gradient";
import OrderCard from "../components/OrderCard";
import AccountCard from "../components/AccountCard";
import { infoData, OrderData, WishListData } from "../data/ProfileData";
import AuthContext from "../context/authContext";
import { HomeTabScreenProps, UserInfo } from "../types";

const ProfileScreen = ({ navigation, route }: HomeTabScreenProps<"profile">) => {
  const { signOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    setUserInfo(route.params);
  }, []);

  useEffect(() =>
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0xnXBrrzMs_toOO9UrHzhnZHGfaHNS51pw&usqp=CAU",
          }}
          style={styles.profileScreenHeaderImg}
        />
      ),
      headerRight: () => (
        <View style={styles.profileScreenHeaderIconsContainer}>
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient colors={["rgba(5, 250, 242,0.4)", "#fff"]}>
        <View style={styles.profileScreenTitleContainer}>
          <Text style={styles.profileScreenTitle}>Bonjour, {`${userInfo?.given_name}`}</Text>
          <Image
            source={{
              uri: userInfo?.picture,
            }}
            style={styles.profileScreenAvatar}
          />
        </View>
        <View>
          <Pressable style={styles.profileScreenlogoutBtn} onPress={signOut}>
            <Text style={styles.profileScreenlogoutBtnText}>Se déconnecter</Text>
          </Pressable>
        </View>
        <View style={styles.profileScreenActionContainer}>
          {infoData.map((data, index) => (
            <ProfileCard key={index} title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.profileScreenOrderContainer}>
        <Text style={styles.profileScreenOrderText}>Vos commandes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {OrderData.map((data, index) => (
            <OrderCard key={index} image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.profileScreenOrderContainer}>
        <Text style={styles.profileScreenOrderText}>Vos favoris</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {WishListData.map((data, index) => (
            <OrderCard key={index} image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.profileScreenOrderContainer}>
        <Text style={styles.profileScreenOrderText}>Vos informations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {userInfo &&
            Object.keys(userInfo).map((info, index) => (
              <AccountCard key={index} title={info} value={userInfo[info]} />
            ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreenHeaderImg: {
    height: 30,
    width: 90,
    marginLeft: 10,
  },
  profileScreenHeaderIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  profileScreenTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileScreenTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  profileScreenlogoutBtn: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreenlogoutBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  profileScreenAvatar: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
  profileScreenActionContainer: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profileScreenOrderContainer: {
    marginTop: 15,
    borderBottomColor: "#b8baba",
    borderBottomWidth: 3,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  profileScreenOrderText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
});
