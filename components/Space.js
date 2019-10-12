import React from "react";
import { View, Dimensions } from "react-native";

const Space = ({ children, left, right, top, bottom }) => {
  return (
    <View
      style={{
        marginLeft: left,
        marginRight: right,
        marginTop: top,
        marginBottom: bottom,
      }}
    >
      {children}
    </View>
  );
};

Space.defaultProps = {
  top: Dimensions.get("window").height / 40,
  left: Dimensions.get("window").width / 40,
  right: Dimensions.get("window").width / 40,
  bottom: Dimensions.get("window").height / 40,
};

export default Space;
