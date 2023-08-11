import { View, Button } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../context/authContext";

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Button title="Se déconnecter" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
