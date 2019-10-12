import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Space from "./Space";

const ListItem = ({ item }) => {
  return (
    <Space>
      <View style={styles.imageView}>
        <Image source={{ uri: item.img }} style={styles.image} />
      </View>
      <View style={styles.ListItem}>
        <View style={styles.textContent}>
          <Text style={styles.textHeader}>{item.name}</Text>
          <View>
            <View style={styles.depsc}>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={18}
                color="green"
              />
              <Text> {item.quantity}</Text>
            </View>
            <View style={styles.depsc}>
              <Ionicons name="ios-download" size={18} color="green" />
              <Text>{item.saleofQuantity}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonForward}>
          <Ionicons name="ios-arrow-forward" size={32} />
        </View>
      </View>
    </Space>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: "row",
    paddingVertical: Dimensions.get("window").height / 25,
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 15,
    marginLeft: 50, // bằng nữa cái hình
    backgroundColor: "white",
  },
  imageView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    // alignItems: "center",
    zIndex: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 0.5,
  },
  textContent: {
    flex: 3,
    marginLeft: Dimensions.get("window").width / 15,
    paddingHorizontal: Dimensions.get("window").width / 10, // trừ cho + cho marginleft
  },
  textHeader: { fontSize: 22, fontWeight: "bold" },
  depsc: { flexDirection: "row" },
  buttonForward: {
    flex: 1,
    textAlign: "right",
    alignSelf: "center",
    marginLeft: Dimensions.get("window").width / 50,
  },
});

export default ListItem;
