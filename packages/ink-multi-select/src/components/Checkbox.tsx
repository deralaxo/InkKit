import React from "react";
import { Box, Text } from "ink";
import figures from "figures";

type CheckBoxProps = {
  isSelected: boolean;
};

const CheckBox = ({ isSelected = false }: CheckBoxProps) => (
  <Box marginRight={1}>
    <Text color="green">
      {isSelected ? figures.circleFilled : figures.circle}
    </Text>
  </Box>
);

export default CheckBox;
