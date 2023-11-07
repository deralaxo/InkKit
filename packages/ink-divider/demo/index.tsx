import React from 'react';
import { Box, render } from 'ink';

import Divider from '../src/Divider.js';

const Demo = () => {
  return (
    <Box flexDirection="column">
      <Box marginY={1} />
      <Divider title="Default" />
      <Box marginY={1} />
      <Divider title="Shorter" width={30} dividerColor={'yellow'} titleColor={'blue'} />
      <Box marginY={1} />
      <Divider dividerChar="=" dividerColor={'magenta'} titleColor={'red'} />
      <Box marginY={1} />
    </Box>
  );
};

render(<Demo />);
