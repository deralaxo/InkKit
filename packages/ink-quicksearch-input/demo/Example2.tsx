import React, { FC, useState } from 'react';
import { Box, Text } from 'ink';
import QuickSearchInput from '../src/QuickSearchInput.js';

export const Example2Name = 'Case-Sensitive, No Query/Status Element';

export const Example2: FC = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <>
      <Text key="header">Example 2: {Example2Name}</Text>
      <Text color="green" key="selected-item">
        Selected item is {selectedValue}
      </Text>
      <Box key="spacer" marginBottom={2} />
      <QuickSearchInput
        key="input"
        {...{
          items: [
            { label: 'Animal' },
            { label: 'Antilope' },
            { label: 'Animation' },
            { label: 'Animate' },
            { label: 'Arizona' },
            { label: 'Aria' },
            { label: 'Arid' },
          ],
          onSelect: (d) => setSelectedValue(d.label),
          caseSensitive: true,
          // Hide the statusComponent
          statusComponent: () => {
            return React.createElement(React.Fragment);
          },
        }}
      />
    </>
  );
};
