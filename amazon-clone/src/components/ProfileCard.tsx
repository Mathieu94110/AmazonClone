import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";

interface ProfileCardProps {
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.profileCard, { width: width / 2 - 25 }]}>
      <Text>{title}</Text>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#b8baba",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
});
