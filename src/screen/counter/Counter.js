import React, { useState } from "react";
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
// import from "../../components/modal/Modal";
import { Modall } from "../../components";
// import { Overlay } from "@rneui/themed";

// image:require("../../assets/images/flag.png"),
const Counter = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const data = [
    {
      number: "0-25%",
      image:
        "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      number: "25-50%",
      image:
        "https://media.istockphoto.com/id/1159288261/photo/variation-of-garden-flowers.jpg?b=1&s=170667a&w=0&k=20&c=UV96JxkkihPyc1xVxZYy20BzTAiZn5Kn2C_22ABsvd0=",
    },
    {
      number: "50-75%",
      image:
        "https://media.istockphoto.com/id/1186352655/photo/blue-aster-flowers-layout.jpg?b=1&s=170667a&w=0&k=20&c=7K_CZHzcs0o-bdGjbE8qILjEe7nxjRMzs69csheXk_4=",
    },
    {
      number: "75-100%",
      image:
        "https://media.istockphoto.com/id/514558244/photo/blossom-poppy-flowers.jpg?b=1&s=170667a&w=0&k=20&c=clgA4HkVbNRfaCev4s_sNXsW0BUfDxs1ZGICQSvcVZE=",
    },
  ];
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
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ width: "90%", height: "90%", alignSelf: "center" }}>
          <View
            style={{ flexDirection: "row", marginTop: 100, marginVertical: 20 }}
          >
            <FlatList
              data={data}
              horizontal={true}
              // scrollEnabled={false}
              renderItem={(element) => {
                return (
                  <View style={{ alignItems: "center", padding: 5 }}>
                    <Image
                      source={{
                        uri: element.item.image,
                        // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
                      }}
                      style={{ width: 70, height: 70, borderRadius: 40 }}
                    />
                    <Text>{element.item.number}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.box}>
            <View style={{ alignItems: "center", top: 40 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Dial it in if you have any wish
              </Text>
            </View>
            {/* <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>25-50%</Text>
          </View>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
            <Text>50-75%</Text>
          </View>
          <View style={{ alignItems: "center", padding: 5 }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
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
                uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 15,
              }}
            /> */}
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
                  // uri: data[0].image,
                  uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjByb3NlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                  // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VQzyjvKKpREBU3KSiLHCIptcIVX7ZZ1Yvg&usqp=CAU",
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
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIncre(0);
                  }}
                >
                  <Text style={styles.btn}>Reset</Text>
                </TouchableOpacity>
                {/* <Overlay /> */}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.modalbtn}
            >
              <Text style={styles.modaltext}>Modal</Text>
            </TouchableOpacity>
            {/* <Modall
              visible={visible}
              press1={() => {
                setVisible(false), setVisible2(true);
              }}
              backgroundColor={"red"}
            /> */}
            <Modall
              visible={visible}
              press1={() => {
                setVisible(false);
              }}
              press2={() => {
                setVisible2(true), setVisible(false);
              }}
              name="Second"
              backgroundColor={"white"}
            />
            <Modall
              visible={visible2}
              press1={() => {
                setVisible2(false), setVisible(true);
              }}
              press2={() => {
                setVisible2(false), setVisible(false), setVisible3(true);
              }}
              name="third"
              backgroundColor={"green"}
            />
            <Modall
              backgroundColor={"blue"}
              visible={visible3}
              press1={() => {
                setVisible3(false), setVisible2(true);
              }}
              press2={() => {
                setVisible3(false);
              }}
              name="fourth"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 300,
    borderRadius: 17,
    // marginTop: 90,
    marginVertical: 20,
    paddingVertical: 20,
    shadowColor: "#F33AEA",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
  btn: {
    paddingLeft: 15,
  },
  modalbtn: {
    width: "90%",
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 14,
    marginTop: 20,
  },
  modaltext: {
    // width: "90%",
    // height: 50,
    // marginTop: 50,
    color: "white",
    fontSize: 19,
    fontWeight: "600",
  },
});
export default Counter;
