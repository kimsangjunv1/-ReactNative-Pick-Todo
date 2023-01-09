import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
// const [state, setState] = useState([]);

// const _toggleComplete = () => {
//   setState((prevState) => {
//     return {
//       isCompleted: !prevState.isCompleted,
//     };
//   });
// };
const ToDo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text>Hello Im a To Do</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 3,
    marginRight: 20,
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default ToDo;
