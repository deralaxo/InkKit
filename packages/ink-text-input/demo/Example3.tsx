import { useState } from 'react';
import React from 'react';
import TextInput from '../src/index.js';
import { Box, Text } from 'ink';
import { ExampleProps } from './Example1.js';

const Example3 = ({ setSelectedExample }: ExampleProps) => {
  const [value, setValue] = useState<string>('1234');

  return (
    <Box>
      <Text>{'> '}</Text>
      <TextInput
        value={value}
        onChange={setValue}
        type="numericInteger"
        onSubmit={() => setSelectedExample('menu')}
      />
    </Box>
  );
};

export default Example3;