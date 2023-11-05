import React, { useState } from 'react';
import { render } from 'ink';
import SelectInput from '@inkkit/ink-select-input';
import Example1 from './Example1.js';
import Example2 from './Example2.js';
import Example3 from './Example3.js';
import Example4 from './Example4.js';

export type ExampleNavigation = 'first' | 'second' | 'third' | 'fourth' | 'menu';

const Demo = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleNavigation>('menu');

  const items = [
    { label: 'Basic example', value: 'first' },
    { label: 'Numeric example', value: 'second' },
    { label: 'Numeric Integer example', value: 'third' },
    { label: 'Masked example', value: 'fourth' },
  ];

  switch (selectedExample) {
    case 'first':
      return <Example1 setSelectedExample={setSelectedExample} />;
    case 'second':
      return <Example2 setSelectedExample={setSelectedExample} />;
    case 'third':
      return <Example3 setSelectedExample={setSelectedExample} />;
    case 'fourth':
      return <Example4 setSelectedExample={setSelectedExample} />;
    case 'menu':
    default:
      return (
        <SelectInput
          items={items}
          onSelect={(item) => setSelectedExample(item.value as ExampleNavigation)}
        />
      );
  }
};

render(<Demo />);
