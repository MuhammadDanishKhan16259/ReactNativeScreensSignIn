import { Text, View, StyleSheet, Button } from "react-native";
import React from "react";

const home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome home</Text>
      <Button title="Go Back" />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 34,
    color: "#4c5dab",
    marginTop: 0,
    textTransform: "capitalize",
  },
});
export default home;
