import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Button3 from "../../components/inputs/Button3";
import AntDesign from "@expo/vector-icons/AntDesign";

const Start = () => {
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
        <View style={styles.mainview}>
          <BlurView intensity={80} tint={"default"} style={styles.blurview}>
            <View style={styles.view1}>
              <Entypo name="squared-minus" size={60} color={"white"} />
              <MaterialCommunityIcons
                name="circle-half-full"
                size={60}
                color={"white"}
                style={styles.circle}
              />
            </View>
            <View style={styles.view2}>
              {/* <Entypo name="menu" size={60} color={"white"} /> */}
              <Feather name="menu" size={60} color={"white"} />
              <Entypo name="squared-cross" size={60} color={"white"} />
            </View>
          </BlurView>
          <View style={styles.textview}>
            <Text style={styles.text1}>Hello!</Text>
            <Text style={styles.text1}>We are ÜŪ</Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              Create an account or login to begin adventure.
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Button3
              text={"continue with phone"}
              logo="mobile"
              color="purple"
            />
            <Button3
              text={"continue with google"}
              logo="google"
              color="orange"
            />
            <Button3
              text={"continue with facebook"}
              logo="facebook"
              color="blue"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "white" }}>More Login Options</Text>
            <AntDesign
              name="down"
              size={17}
              color={"white"}
              style={{ paddingLeft: 4 }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainview: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  blurview: {
    width: "50%",
    height: 170,
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 100,
  },
  view1: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  circle: {
    transform: [{ rotate: "90deg" }],
  },
  view2: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  textview: {
    marginTop: 20,
  },
  text1: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "500",
    marginTop: -10,
  },
});
{
  /* <View>
<Text>start</Text>
</View> */
}
export default Start;
