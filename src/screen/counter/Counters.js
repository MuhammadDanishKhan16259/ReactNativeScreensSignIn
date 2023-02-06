import React, { useState } from "react";
import { FlatList, Image, View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const Counters = () => {
  const [incre, setIncre] = useState(0);
  if (incre < 0) {
    setIncre(0);
  }
  const increament = () => {
    setIncre(incre + 1);
  };
  const decreamnet = () => {
    setIncre(incre - 1);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>0-25%</Text>
          </View>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>25-50%</Text>
          </View>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>50-75%</Text>
          </View>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>75-100%</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ alignItems: "center", top: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Dial it in if you have any wish
            </Text>
          </View>
          <View
            style={{
              marginTop: 90,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 15,
              }}
            />
            <Text style={{ fontSize: 18 }}>{incre}%</Text>
            <View style={{ marginLeft: 20 }}>
              <AntDesign name="up" size={30} onPress={increament} />
              <AntDesign name="down" size={30} onPress={decreamnet} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "45%",
    borderRadius: 17,
    marginTop: 90,
    shadowColor: "#F33AEA",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
});
export default Counters;
