import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
const Modall = ({ visible, press1, backgroundColor, press2, name }) => {
  return (
    <Modal isVisible={visible}>
      <View
        style={[styles.modalcontainer, { backgroundColor: backgroundColor }]}
      >
        <TouchableOpacity
          onPress={press1}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "pink",
          }}
        >
          <Text style={{ fontSize: 19 }}>close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={press2}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "red",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 19 }}>{name}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalcontainer: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export { Modall };
