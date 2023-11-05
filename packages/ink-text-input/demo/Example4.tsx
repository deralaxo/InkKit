import { useState } from 'react';
import React from 'react';
import TextInput from '../src/index.js';
import { Box, Text } from 'ink';
import { ExampleProps } from './Example1.js';

const Example4 = ({ setSelectedExample }: ExampleProps) => {
  const [value, setValue] = useState<string>('1234');

  return (
    <Box>
      <Text>{'> '}</Text>
      <TextInput
        value={value}
        onChange={setValue}
        mask="*"
        onSubmit={() => setSelectedExample('menu')}
      />
    </Box>
  );
};

export default Example4;
