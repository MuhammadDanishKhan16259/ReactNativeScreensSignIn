// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Modal from "./src/components/modal/Modal";
import Login from "./src/screen/auth/login";
import SignUp from "./src/screen/auth/Signup";
import Counter from "./src/screen/counter/Counter";
import Status from "./src/screen/homes/status";
import NumberAuth from "./src/screen/NumberAuth/NumberAuth";
import Start from "./src/screen/start/start";
// import Status from "./src/screen/homes/status";

export default function App() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
