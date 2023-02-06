import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import { Buttons } from "../../../components";
const Login = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView>
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
          <Text style={styles.Mainheader}>Sign In</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.heading}>Welcome!</Text>
          <View style={styles.loginform}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.email}>
              <AntDesign
                name="mail"
                color={"blue"}
                size={22}
                style={styles.mail}
              />
              <TextInput
                placeholder="Enter your Email"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <Text style={[styles.labeled, styles.Pass]}>Password</Text>
            <View style={[styles.email, styles.password]}>
              <AntDesign
                name="lock"
                color={"blue"}
                size={22}
                style={styles.mail}
              />
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
                <Text>Remember me</Text>
              </View>
              <Text>Forget password?</Text>
            </View>
            {/* <TouchableOpacity style={styles.SignUp}>
              <LinearGradient
                style={styles.SignUp}
                colors={["#4c669f", "#D89BF6"]}
              >
                <Text style={styles.SignBtn}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity> */}
            {/* navigation.navigate("Home") */}
            <Buttons title="Sign In" />
            <View style={styles.acc}>
              <Text>Create an account</Text>
              <Text style={styles.txt}>Sign Up</Text>
            </View>
            <View style={styles.accc}>
              <Text>Having trouble</Text>
              <Text style={styles.txxt}>Contact Us</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

{
  //   <Text
  //   style={{ color: "blue", fontWeight: "500", marginLeft: 5 }}
  // >
  //   Sign Up
  // </Text>
  // <Text style={styles.header}>Welcome!</Text>
  // <Text style={styles.label}>Email</Text>
  //   <TextInput
  //   placeholder="enter your email"
  //   keyboardType="email-address"
  //   style={styles.input}
  // />
  /* <TextInput
placeholder="enter your email"
keyboardType="email-address"
style={styles.input}
/> */
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
    fontSize: 40,
    color: "#344055",
    top: 20,
    fontWeight: "600",
  },
  SignBtn: {
    fontSize: 18,
    fontWeight: "500",
  },
  SignUp: {
    width: "80%",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  // header: {
  //   fontSize: 40,
  //   color: "#344055",
  //   top: 150,
  //   fontWeight: "600",
  //   textAlign: "center",
  // },
  input: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    alignItems: "center",
    width: "80%",
    fontSize: 18,
    color: "black",
    marginTop: 200,
    marginBottom: 5,
    lineHeight: 25,
  },
  pass: {
    left: -115,
    top: 50,
  },

  login: {
    fontSize: 40,
    color: "black",
    top: 20,
    fontWeight: "600",
  },
  form: {
    width: "100%",
    alignItems: "center",
    top: 80,
  },
  form: {
    width: "100%",
    alignItems: "center",
    top: 80,
  },
  heading: {
    fontSize: 35,
    fontWeight: "500",
  },
  loginform: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    top: 30,
    left: -136,
  },
  labeled: {
    fontSize: 18,
    fontWeight: "700",
    top: 50,
    left: -126,
  },
  input: {
    fontSize: 16,
    color: "black",
    paddingLeft: 10,
    width: "90%",
  },

  email: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    borderWidth: 1,
    width: "90%",
    height: 50,
    color: "black",
    top: 35,
    paddingLeft: 20,
    borderRadius: 6,
    backgroundColor: "#E8E8E8",
    borderColor: "#BEBEBE",
    alignItems: "center",
  },
  password: {
    top: 60,
  },
  check: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 80,
  },
  acc: {
    flexDirection: "row",
    marginTop: 10,
  },
  txt: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "500",
  },
  accc: {
    flexDirection: "row",
    marginTop: 90,
  },
  txxt: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "500",
  },
});
// </View>
// <Text style={styles.login}>Sign In</Text>
// </View>
{
  /* <SafeAreaView>
<View>
  <AntDesign name="left" color={"black"} size={25} />
</View>
</SafeAreaView> */
}
{
  /* <Text>index update</Text> */
}

export default Login;
