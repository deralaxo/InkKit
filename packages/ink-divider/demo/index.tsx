import React from "react";

import { Box, Text, render } from "ink";
import Divider from "../src/Divider.js";

const Demo = () => {
  return (
    <Box flexDirection="column">
      <Box marginY={1}>
        <Text>Part1</Text>
      </Box>
      <Divider title="Hello" />
      <Box marginY={1}>
        <Text>Part2</Text>
      </Box>
      <Divider
        title="Another part"
        width={30}
        dividerColor={"yellow"}
        titleColor={"blue"}
      />
      <Box marginY={1}>
        <Text>Part3</Text>
      </Box>
      <Divider
        dividerChar="="
        titlePadding={2}
        width={40}
        dividerColor={"magenta"}
        titleColor={"red"}
      />
    </Box>
  );
};

render(<Demo />);
