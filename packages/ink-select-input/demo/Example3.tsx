import { Box, Text } from 'ink';
import React, { useState } from 'react';
import SelectInput from '../src/SelectInput.js';
import figureSet from 'figures';

const Example3 = () => {
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
      <Box>
        <SelectInput
          items={items}
          onSelect={(item) => setSelected(item.value)}
          itemComponent={({ label, isSelected }) => {
            const isFourth = label === 'Fourth';
            const color = isFourth && isSelected ? 'red' : isFourth ? 'magenta' : undefined;
            return (
              <Box>
                <Text color={color ?? (isSelected ? 'yellow' : undefined)} dimColor={isFourth}>
                  {label}
                </Text>
              </Box>
            );
          }}
          indicatorComponent={({ isSelected }) => {
            return (
              <Box marginRight={1}>
                <Text color={isSelected ? 'red' : undefined}>
                  {isSelected ? figureSet.arrowRight : ' '}
                </Text>
              </Box>
            );
          }}
          wrapperProps={({ index }) => ({ marginTop: index === 4 ? 1 : 0 })}
        />
      </Box>
    </Box>
  );
};

export default Example3;
