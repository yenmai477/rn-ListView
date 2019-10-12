import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListItemScreen from "./screens/ListItemScreen";
import ItemDetailsScreen from "./screens/ItemDetailScreen";

const navigator = createStackNavigator({
  ListItem: {
    screen: ListItemScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Cơm trưa",
    }),
  },
  ItemDetail: {
    screen: ItemDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Thông tin chi tiết",
    }),
  },
});

export default createAppContainer(navigator);
