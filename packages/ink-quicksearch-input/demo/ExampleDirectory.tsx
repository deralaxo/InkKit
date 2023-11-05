import React, { FC, useState } from 'react';
import { Box, render, Text } from 'ink';
import { Example1, Example1Name } from './Example1.js';
import { Example2, Example2Name } from './Example2.js';
import { Example3, Example3Name } from './Example3.js';
import { Example4, Example4Name } from './Example4.js';
import QuickSearchInput from '../src/QuickSearchInput.js';

const ExampleDirectory: FC = () => {
  const [selectedExample, setSelectedExample] = useState('');

  if (selectedExample === Example1Name) {
    return <Example1 />;
  } else if (selectedExample === Example2Name) {
    return <Example2 />;
  } else if (selectedExample === Example3Name) {
    return <Example3 />;
  } else if (selectedExample === Example4Name) {
    return <Example4 />;
  } else {
    return (
      <>
        <Text color="green">Which example would you like to explore?</Text>
        <Box key="spacer" marginBottom={2} />
        <QuickSearchInput
          {...{
            items: [
              { label: Example1Name },
              { label: Example2Name },
              { label: Example3Name },
              { label: Example4Name },
            ],
            onSelect: (item) => setSelectedExample(item.label),
          }}
        />
      </>
    );
  }
};

render(<ExampleDirectory />);
