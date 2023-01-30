import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
const SignUp = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <LinearGradient
            style={styles.leftarrow}
            colors={["#4c669f", "#D89BF6"]}
          >
            <AntDesign name="left" color={"white"} size={25} />
          </LinearGradient>
        </View>
        <Text style={styles.Mainheader}>Sign Up</Text>
      </View>
      <View style={{ paddingTop: 5, marginTop: 45, alignSelf: "center" }}>
        <Image
          source={{
            uri: "https://shayariholic.com/wp-content/uploads/2022/09/sweet-cat-dp-for-whatsapp-2.jpg",
          }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: -50 }}
        />
      </View>
      <Text style={styles.label}>First Name</Text>
      <View style={styles.email}>
        <TextInput
          placeholder="Enter your Email"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <Text style={styles.label}>Last Name</Text>
      <View style={styles.email}>
        <TextInput
          placeholder="Enter your Email"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <Text style={styles.label}>Email</Text>
      <View style={styles.email}>
        <TextInput
          placeholder="Enter your Email"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.email}>
        <TextInput
          placeholder="enter your password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.email}>
        <TextInput
          placeholder="enter your password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.check}>
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={{ marginRight: 10 }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text>I accept</Text>
        </View>
        <View style={styles.acc}>
          <Text style={{ color: "blue", fontWeight: "500" }}>
            Terms & Conditions
          </Text>
          <Text style={{ marginHorizontal: 4 }}>&</Text>
          <Text style={styles.txt}>Privacy Policy</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.SignUp}>
        <LinearGradient style={styles.SignUp} colors={["#4c669f", "#D89BF6"]}>
          <Text style={styles.SignBtn}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.accc}>
        <Text>Already have an account</Text>
        <Text style={styles.txxt}>Sign Up</Text>
      </View>
      <View style={styles.accd}>
        <Text>Having trouble</Text>
        <Text style={styles.txxd}>Contact Us</Text>
      </View>
    </View>
  );
};
{
  /* <View style={styles.container}>
<View style={styles.top}>
  <View style={styles.left}>
    <LinearGradient
      style={styles.leftarrow}
      colors={["#4c669f", "#D89BF6"]}
    >
      <AntDesign name="left" color={"white"} size={25} />
    </LinearGradient>
  </View>
  <Text style={styles.Mainheader}>Sign In</Text>
</View>
</View> */
  // label: {
  //     fontSize: 18,
  //     fontWeight: "700",
  //     top: 30,
  //     left: -136,
  //   },
  //   email: {
  //     borderColor: "black",
  //     borderWidth: 1,
  //     flexDirection: "row",
  //     borderWidth: 1,
  //     width: "90%",
  //     height: 50,
  //     color: "black",
  //     top: 35,
  //     paddingLeft: 20,
  //     borderRadius: 6,
  //     backgroundColor: "#E8E8E8",
  //     borderColor: "#BEBEBE",
  //     alignItems: "center",
  //   },
  //   input: {
  //     fontSize: 16,
  //     color: "black",
  //     paddingLeft: 10,
  //     width: "90%",
  //   },
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  top: {
    top: 40,
    left: 20,
  },
  left: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  leftarrow: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Mainheader: {
    fontSize: 30,
    color: "#344055",
    top: 10,
    fontWeight: "600",
  },
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
  check: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 20,
  },
  acc: {
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 5,
  },
  txt: {
    color: "blue",
    fontWeight: "500",
  },
  SignUp: {
    width: "80%",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    alignSelf: "center",
  },
  SignBtn: {
    fontSize: 18,
    fontWeight: "500",
  },
  accc: {
    flexDirection: "row",
    marginTop: 2,
    alignSelf: "center",
  },
  txxt: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "500",
  },
  accd: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
  },
  txxd: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "500",
  },
});

export default SignUp;
