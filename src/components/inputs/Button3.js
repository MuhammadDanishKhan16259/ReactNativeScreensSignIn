import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Button3 = ({ text, logo, color }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      {logo == "mobile" ? (
        <FontAwesome5 name={logo} size={22} color={color} />
      ) : logo == "facebook" ? (
        <MaterialCommunityIcons name={logo} size={22} color={color} />
      ) : (
        <AntDesign name={logo} size={22} color={color} />
      )}
      <Text style={{ fontSize: 15, paddingLeft: 10 }}>{text}</Text>
      {/* <FontAwesome name={logo} size={22} color={color} />
      <AntDesign name={logo} size={22} color={color} />
      <Text style={{ fontSize: 15, paddingLeft: 10 }}>{text}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    height: 60,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    // alignSelf: "center",
  },
});
export default Button3;
