import { StyleSheet } from "react-native";
import React, { useState, useEffect, useReducer } from "react";
import CartScreen from "./src/screens/CartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import MenuScreen from "./src/screens/MenuScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import AuthContext from "./src/context/authContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            googleToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            googleToken: null,
            userInfo: null,
          };
        case "SET_USER_INFO":
          return {
            ...prevState,
            userInfo: action.userInfo,
          };
      }
    },
    {
      isSignout: false,
      googleToken: null,
      userInfo: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (googleToken) => {
        await getUserData(googleToken);
      },
      signOut: async () => {
        await logout();
      },
    }),
    [],
  );

  const logout = async () => {
    await AuthSession.revokeAsync(
      {
        token: state.googleToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      },
    );
    AsyncStorage.removeItem("auth");
    dispatch({ type: "SIGN_OUT" });
  };

  const getUserData = async (googleToken) => {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${googleToken.accessToken}` },
    });

    userInfoResponse.json().then((data) => {
      dispatch({ type: "SET_USER_INFO", userInfo: data });
    });
    dispatch({ type: "SIGN_IN", token: googleToken });
  };

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue !== null) {
        const authFromJson = JSON.parse(jsonValue);
        getUserData(authFromJson);
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
    () => logout();
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer style={styles.appContainer}>
        {state.userInfo === null ? (
          <LoginScreen />
        ) : (
          <>
            <Tab.Navigator
              initialRouteName="home"
              screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#02c3d9",
              }}
            >
              <Tab.Screen
                name="home"
                component={HomeScreen}
                initialParams={state.userInfo}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="profile"
                component={ProfileScreen}
                initialParams={state.userInfo}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="cart"
                component={CartScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="menu"
                component={MenuScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="menu" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
