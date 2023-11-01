import { Box, Text, render } from 'ink';
import React from 'react';

import Basic from './basic.js';
import Custom from './custom.js';

const Demo = () => {
  return (
    <>
      <Text bold underline>
        Basic
      </Text>
      <Basic />
      <Box marginBottom={2} />
      <Text bold underline>
        Custom
      </Text>
      <Custom />
    </>
  );
};

render(<Demo />);
