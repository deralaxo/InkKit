import { Box, Text } from 'ink';
import React, { useState } from 'react';
import SelectInput from '../src/SelectInput.js';

const Example2 = () => {
  const [selected, setSelected] = useState<string | null>(null);

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
      <SelectInput items={items} onSelect={(item) => setSelected(item.value)} limit={3} />
    </Box>
  );
};

export default Example2;
