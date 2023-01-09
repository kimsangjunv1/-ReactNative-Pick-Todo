// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";

import ToDo from "./ToDo";

// 현재 페이지의 높이 넓이를 가져옴
const { height, width } = Dimensions.get("window");

const state = {
  newToDo: "",
};
export default function App() {
  const [goValue, setGoValue] = useState([]);
  // const { newToDo } = this.state;
  console.log(goValue);
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Pick To Do</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder={"New To Do"}
          value={goValue}
          onChange={(event) => setGoValue(event.target.value)}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          // 자동수정 막기
          autoCorrect={false}
        />
        <ScrollView contentContainerStyle={styles.toDos}>
          <ToDo />
        </ScrollView>
      </View>
    </View>
  );
  _controlNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f23657",
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // ios / android는 각각 shadow의 읽는 방식이 다름
    // shadowColor / elevation
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          // 방향 위
          height: -1,
          // 방향 왼쪽
          width: 1,
        },
      },
      android: {
        elevatiom: 3,
      },
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: "center",
  },
});
