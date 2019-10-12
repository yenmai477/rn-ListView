import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import data from "../db";
import ListItem from "../components/ListItem";

const ListItemScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.redBackGround}></View>
        <View style={styles.whiteBackground}></View>
        <View style={styles.ListItem}>
          <FlatList
            data={data}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("ItemDetail")}
              >
                <ListItem item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  redBackGround: {
    backgroundColor: "red",
    flex: 1,
    height: Dimensions.get("window").height,
  },
  whiteBackground: {
    flex: 2,
    height: Dimensions.get("window").height,
  },
  ListItem: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    // alignItems: "center",
    zIndex: 10,
  },
});

export default ListItemScreen;
