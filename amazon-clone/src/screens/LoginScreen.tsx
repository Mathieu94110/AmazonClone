import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import * as Google from "expo-auth-session/providers/google";
import config from "../../config";
import AuthContext from "../context/authContext";

export default function LoginScreen() {
  const { signIn } = useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: config.API_ANDROID_CLIENT_ID,
    expoClientId: config.API_EXPO_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      signIn(response.authentication);
      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
      };
      persistAuth();
    }
  }, [response]);

  return (
    <View style={styles.loginScreen}>
      <Image
        style={styles.loginScreenAmazonImg}
        source={{
          uri: "https://images.bfmtv.com/S--kfLLxpC1Gug6nzUUnT83iZXA=/0x0:1260x840/1260x0/biz_dev/1691659529576_amazon_mode_offre_fashion_jpg.jpg",
        }}
      />
      <View style={styles.loginScreenGoogleBtn}>
        <View style={styles.loginScreenGoogleBtnIcon}></View>
        <Image
          style={styles.loginScreenGoogleBtnIconImg}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8dUf_k1neAIDIeONRJUtqL6kpjf2y0EstWvY9JHw_A&s",
          }}
        />
        <TouchableOpacity onPress={() => promptAsync({ useProxy: true, showInRecents: true })}>
          <Text style={styles.loginScreenGoogleBtnText}>Se connecter avec Google</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  loginScreenAmazonImg: {
    width: 220,
    height: 100,
    position: "absolute",
    top: 200,
  },
  loginScreenGoogleBtn: {
    width: 220,
    height: 42,
    backgroundColor: "#4285f4",
    borderRadius: 2,
  },
  loginScreenGoogleBtnIcon: {
    position: "absolute",
    marginTop: 1,
    marginLeft: 1,
    width: 40,
    height: 40,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  loginScreenGoogleBtnIconImg: {
    position: "absolute",
    marginTop: 11,
    marginLeft: 11,
    width: 18,
    height: 18,
  },
  loginScreenGoogleBtnText: {
    position: "absolute",
    top: 11,
    right: 5,
    color: "#fff",
    fontSize: 14,
    letterSpacing: 0.2,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
