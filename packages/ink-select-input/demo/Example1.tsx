import React from 'react';
import SelectInput from '../src/SelectInput.js';

const Example1 = () => {
  const items = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
    { label: 'Fourth', value: 'fourth' },
    { label: 'Fifth', value: 'fifth' },
  ];

  return <SelectInput items={items} onSelect={(item) => console.log(item)} />;
};

export default Example1;
