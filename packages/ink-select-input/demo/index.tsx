import React, { useState } from 'react';
import { render } from 'ink';
import SelectInput from '../src/SelectInput.js';
import Example1 from './Example1.js';
import Example2 from './Example2.js';
import Example3 from './Example3.js';

type ExampleNavigation = 'first' | 'second' | 'third' | 'menu';

const Demo = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleNavigation>('menu');

  const items = [
    { label: 'Basic example', value: 'first' },
    { label: 'Limit example', value: 'second' },
    { label: 'Custom components example', value: 'third' },
  ];

  switch (selectedExample) {
    case 'first':
      return <Example1 />;
    case 'second':
      return <Example2 />;
    case 'third':
      return <Example3 />;
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
