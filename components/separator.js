import { Box } from "react-native";
import React from "react";

// Functional Component with props
const Separator = (props) => {
  return <Box style={{ height: props.height }}></Box>;
};

export default Separator;
