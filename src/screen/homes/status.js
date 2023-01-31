import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Modal from "react-native-modal";
import { BlurView } from "expo-blur";
import Users from "../../components/users/Users";
// import { TouchableOpacity } from "react-native-web";
// import { SlideInUp } from "react-native-reanimated";
const Status = () => {
  const image = {
    uri: "https://img.freepik.com/free-photo/blurred-background-party-decoration-with-balloon-entertainment-lifestyle-concept-vintage-filtered-image_1253-1398.jpg?w=2000",
  };
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={image}>
          <Text style={styles.text}>
            Today is 20 feb wish you very happy birthday
          </Text>
          <Entypo
            name="emoji-happy"
            color={"black"}
            size={25}
            style={{ textAlign: "center", marginTop: 20 }}
          />
          <View style={{ textAlign: "center", marginTop: "80%" }}>
            {visible === false ? (
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <AntDesign name="eye" color={"black"} size={25} />
                <Text style={{ color: "white", marginLeft: 5 }}>40 views</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <Modal
            style={styles.modelStyle}
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
            onBackButtonPress={() => setVisible(false)}
            // animationIn={"SlideInUp"}
            // animationInTiming={200}
          >
            {/* <View style={styles.modalcontainer}></View> */}
            <BlurView intensity={150} style={styles.modalcontainer}>
              <View>
                <TouchableOpacity
                  onPress={() => setVisible(false)}
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <AntDesign name="eye" color={"black"} size={25} />
                  <Text style={{ color: "white", marginLeft: 5 }}>
                    40 views
                  </Text>
                </TouchableOpacity>
                {/* <AntDesign name="eye" color={"black"} size={25} />
                <Text style={{ color: "white", marginLeft: 5 }}>40 views</Text> */}
                <ScrollView style={{ height: "90%" }}>
                  <Users
                    name="Danish"
                    active="30 mins"
                    image="https://shayariholic.com/wp-content/uploads/2022/09/sweet-cat-dp-for-whatsapp-2.jpg"
                  />
                  <Users
                    name="Diana wells"
                    active="1h ago"
                    image="https://i0.wp.com/sguru.org/wp-content/uploads/2017/04/cute-girl-dp-for-whatsapp-5.jpg?resize=322%2C323&ssl=1"
                  />
                  <Users
                    name="jessica"
                    active="3h ago"
                    image="https://i0.wp.com/sguru.org/wp-content/uploads/2017/04/cute-girl-dp-for-whatsapp-17.jpg?resize=500%2C400&ssl=1"
                  />
                  <Users
                    name="Diana"
                    active="8h ago"
                    image="https://i.pinimg.com/originals/5a/d5/cd/5ad5cd50f8bc05374fa96e4626180a5e.jpg"
                  />
                  <Users
                    name="Diana"
                    active="8h ago"
                    image="https://i.pinimg.com/originals/5a/d5/cd/5ad5cd50f8bc05374fa96e4626180a5e.jpg"
                  />
                  <Users
                    name="Diana"
                    active="8h ago"
                    image="https://i.pinimg.com/originals/5a/d5/cd/5ad5cd50f8bc05374fa96e4626180a5e.jpg"
                  />
                  <Users
                    name="Diana"
                    active="8h ago"
                    image="https://i.pinimg.com/originals/5a/d5/cd/5ad5cd50f8bc05374fa96e4626180a5e.jpg"
                  />
                  <Users
                    name="jessica"
                    active="3h ago"
                    image="https://i0.wp.com/sguru.org/wp-content/uploads/2017/04/cute-girl-dp-for-whatsapp-17.jpg?resize=500%2C400&ssl=1"
                  />
                  <Users
                    name="jessica"
                    active="3h ago"
                    image="https://i0.wp.com/sguru.org/wp-content/uploads/2017/04/cute-girl-dp-for-whatsapp-17.jpg?resize=500%2C400&ssl=1"
                  />
                </ScrollView>
              </View>
            </BlurView>
          </Modal>
        </ImageBackground>
      </View>

      {/* <View>
        <Text>hshs</Text>
      </View> */}
    </SafeAreaView>
  );
};

{
  /* <ImageBackground
          style={{ flex: 1 }}
          resizeMode="cover"
          source={image}
        /> */
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: "60%",
    width: "70%",
    // backgroundColor: "red",
    alignSelf: "center",
    fontWeight: "600",
  },
  modalcontainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
    width: "100%",
  },
  modelStyle: {
    justifyContent: "flex-end",
    margin: 0,
  },
  // design: {
  //   color: "white",
  //   flexDirection: "row",
  //   marginTop: 10,
  //   alignSelf: "center",
  // },
});

export default Status;
// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   ImageBackground,
// } from "react-native";

// const Status = () => {
//   const image = {
//     uri: "data:image/jpeg;base64,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",
//   };
//   return (
//     <SafeAreaView style={styles.main}>
//       <View style={{ flex: 1 }}>
//         <ImageBackground
//           style={{ flex: 1 }}
//           resizeMode="cover"
//           source={image}
//         ></ImageBackground>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
// });

// export default Status;
