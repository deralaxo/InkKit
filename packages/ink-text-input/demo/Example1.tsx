import { useState } from 'react';
import React from 'react';
import TextInput from '../src/index.js';
import { Box, Text } from 'ink';
import { ExampleNavigation } from './index.js';

export type ExampleProps = {
  setSelectedExample: (value: ExampleNavigation) => void;
};

const Example1 = ({ setSelectedExample }: ExampleProps) => {
  const [value, setValue] = useState<string>('Hello World!');

  return (
    <Box>
      <Text>{'> '}</Text>
      <TextInput value={value} onChange={setValue} onSubmit={() => setSelectedExample('menu')} />
    </Box>
  );
};

export default Example1;
