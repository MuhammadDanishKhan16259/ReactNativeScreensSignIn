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
const Inputs = (props) => {
  return (
    <View>
      <Text style={[styles.label, { backgroundColor: props.backgroundColor }]}>
        {props.name}
      </Text>
      <View style={styles.email}>
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.type}
          style={styles.input}
          secureTextEntry={props.password}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "700",
    top: 30,
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },
  email: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    borderWidth: 1,
    width: "90%",
    height: 40,
    color: "black",
    top: 35,
    paddingLeft: 20,
    borderRadius: 6,
    backgroundColor: "#E8E8E8",
    borderColor: "#BEBEBE",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    fontSize: 16,
    color: "black",
    paddingLeft: 10,
    width: "90%",
  },
});

export { Inputs };
