import React from "react";
import { Box, Text } from "ink";
import figures from "figures";

type IndicatorProps = {
  isHighlighted: boolean;
};

const Indicator = ({ isHighlighted = false }: IndicatorProps) => (
  <Box marginRight={1}>
    <Text color={isHighlighted ? "blue" : undefined}>
      {isHighlighted ? figures.pointer : " "}
    </Text>
  </Box>
);

export default Indicator;
