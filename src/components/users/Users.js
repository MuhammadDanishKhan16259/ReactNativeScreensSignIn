import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Users = (props) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.profile}
        source={{
          uri: props.image,
        }}
      />
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.active}>{props.active}</Text>
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // marginBottom: -50,
  },
  main: {
    // backgroundColor: "red",
    alignSelf: "center",
    width: "80%",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 17,
    color: "white",
  },
  active: {
    color: "white",
  },
});
