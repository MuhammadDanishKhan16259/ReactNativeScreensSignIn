// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screen/auth/login";
import SignUp from "./src/screen/auth/Signup";
import Status from "./src/screen/homes/status";
import Start from "./src/screen/start/start";
// import Status from "./src/screen/homes/status";

export default function App() {
  return <Start />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
