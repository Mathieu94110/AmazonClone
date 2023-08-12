import { StyleSheet } from "react-native";
import React, { useReducer } from "react";
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
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userInfos: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: data });
      },
      signOut: () => {
        logout().then(() => {
          dispatch({ type: "SIGN_OUT" });
        });
      },
    }),
    [],
  );

  const logout = async () => {
    console.log("logout", "TOKEN =", state.userToken);

    await AuthSession.revokeAsync(
      {
        token: state.userToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      },
    );
    AsyncStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer style={styles.container}>
        {state.userToken === null ? (
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
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="profile"
                component={ProfileScreen}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
