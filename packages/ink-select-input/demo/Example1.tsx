import React, { useState } from 'react';
import SelectInput from '../src/SelectInput.js';
import { Box, Text } from 'ink';

const Example1 = () => {
  const [selected, setSelected] = useState('');
  const items = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
    { label: 'Fourth', value: 'fourth' },
    { label: 'Fifth', value: 'fifth' },
  ];

  return (
    <Box flexDirection="column">
      <Box>
        <Text>Selected item: </Text>
        <Text color="green">{selected}</Text>
      </Box>
      <SelectInput items={items} onSelect={(item) => setSelected(item.value)} />
    </Box>
  );
};

export default Example1;
