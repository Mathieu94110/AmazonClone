import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface AccountCardProps {
  title: string;
  value: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ title, value }) => {
  return (
    <View style={styles.accountCard}>
      <Text style={styles.accountCardTitle}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
      {value.toString().startsWith("https://") ? (
        <Image
          source={{
            uri: value,
          }}
          style={styles.accountCardImg}
        />
      ) : (
        <Text style={styles.accountCardValue}>{value.toString()}</Text>
      )}
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  accountCard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#b8baba",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  accountCardTitle: {
    fontWeight: "600",
    color: "#000",
  },
  accountCardValue: {
    fontWeight: "600",
    color: "#FF9900",
    marginLeft: 10,
  },
  accountCardImg: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    marginLeft: 10,
  },
});
