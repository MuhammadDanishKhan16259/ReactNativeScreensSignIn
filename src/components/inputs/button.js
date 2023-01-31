import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Buttons = (props) => {
  return (
    <TouchableOpacity style={styles.SignUp}>
      <LinearGradient style={styles.SignUp} colors={["#4c669f", "#D89BF6"]}>
        <Text style={styles.SignBtn}> {props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  SignUp: {
    width: "80%",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    alignSelf: "center",
    // marginVertical: 10,
  },
  SignBtn: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});

export { Buttons };
