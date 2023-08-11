import { StyleSheet, View, Button } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import config from "../../config";
import AuthContext from "../context/authContext";

export default function LoginScreen() {
  const [requireRefresh, setRequireRefresh] = useState(false);
  const { signIn, signOut } = useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: config.API_ANDROID_CLIENT_ID,
    expoClientId: config.API_EXPO_CLIENT_ID,
  });

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      signIn(response.authentication?.accessToken);
      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
      };
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue !== null) {
        const authFromJson = JSON.parse(jsonValue);
        console.log("authFromJson =", authFromJson);
        signIn(authFromJson?.accessToken);
        setRequireRefresh(
          !AuthSession.TokenResponse.isTokenFresh({
            expiresIn: authFromJson.expiresIn,
            issuedAt: authFromJson.issuedAt,
          }),
        );
      }
    };
    getPersistedAuth();
  }, []);

  if (requireRefresh) {
    () => signOut();
  }

  return (
    <View style={styles.container}>
      <Button
        title="Se connecter"
        onPress={() => promptAsync({ useProxy: true, showInRecents: true })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
