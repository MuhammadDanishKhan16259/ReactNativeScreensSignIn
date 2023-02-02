import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import OtpInputs from "react-native-otp-inputs";
const NumberAuth = () => {
  const data = [
    {
      id: 1,
    },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
        resizeMode="cover"
        source={require("../../assets/images/backimage2.jpg")}
      >
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={styles.textView}>
            <Text style={styles.heading}>Enter Your Phone</Text>
            <Text style={styles.txt}>
              You will Recieve a 4 digit code for phone number Verification
            </Text>
          </View>

          <View style={styles.middleView}>
            <View style={styles.middleView1}>
              <View style={styles.flag}>
                <Image
                  resizeMode="cover"
                  source={require("../../assets/images/flag.png")}
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
                <Text style={styles.flagtext}>United States</Text>
              </View>
              <AntDesign
                name="down"
                size={17}
                color={"black"}
                // style={{ paddingLeft: 114 }}
              />
            </View>
            <View style={styles.border}></View>
            <View style={styles.middleView2}>
              <Text style={styles.middleView2txt}>+2 </Text>
              <View style={styles.rightborder}></View>
              <TextInput style={styles.input} placeholder="Phone Number" />
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                marginTop: 40,
                margin: 30,
                height: "100%",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FlatList
                data={data}
                style={{ height: "100%" }}
                horizontal={true}
                renderItem={() => {
                  return (
                    <View>
                      <OtpInputs
                        numberOfInputs={1}
                        style={{
                          backgroundColor: "white",
                          width: 50,
                          flexDirection: "row",
                          color: "white",
                          padding: 2,
                          margin: 10,
                          borderRadius: 7,
                          height: 45,
                          fontSize: 22,
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View> */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
{
  /* <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                height: "100%",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FlatList
                data={data}
                style={{ height: "100%" }}
                horizontal={true}
                renderItem={() => {
                  return (
                    <View>
                      <OtpInputs
                        numberOfInputs={1}
                        style={{
                          backgroundColor: "white",
                          width: 40,
                          flexDirection: "row",
                          padding: 2,
                          margin: 10,
                          borderRadius: 7,
                          height: 45,
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View> */
}
// <FlatList
//                 data={data}
//                 renderItem={() => {
//                   return (
//                     <View>
//                     <Text style={{color:"white"}}>Hello</Text>
const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  textView: {
    marginTop: 100,
  },
  txt: {
    color: "white",
    fontSize: 17,
  },
  middleView: {
    backgroundColor: "white",
    height: "25%",
    width: "100%",
    borderRadius: 20,
    textAlign: "center",
    marginTop: 20,
  },
  middleView1: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
  },
  flag: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagtext: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "500%",
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 12,
  },
  middleView2: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "90%",
    fontSize: 17,
    paddingLeft: 10,
  },
  middleView2txt: {
    fontSize: 17,
    paddingLeft: 5,
  },
  rightborder: {
    borderRightColor: "black",
    borderRightWidth: 1,
    paddingLeft: 10,
    height: 20,
  },
  //   label: {
  //     fontSize: 13,
  //     fontWeight: "700",
  //     top: 30,
  //     width: "90%",
  //     alignSelf: "center",
  //     marginTop: 15,
  //   },
  //   email: {
  //     borderColor: "black",
  //     borderWidth: 1,
  //     flexDirection: "row",
  //     borderWidth: 1,
  //     width: "90%",
  //     height: 40,
  //     color: "black",
  //     top: 35,
  //     paddingLeft: 20,
  //     borderRadius: 6,
  //     backgroundColor: "#E8E8E8",
  //     borderColor: "#BEBEBE",
  //     alignItems: "center",
  //     alignSelf: "center",
  //   },
  //   input: {
  //     fontSize: 16,
  //     color: "black",
  //     paddingLeft: 10,
  //     width: "90%",
  //   },
});
export default NumberAuth;
