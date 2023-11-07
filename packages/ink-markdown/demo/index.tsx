import React from 'react';
import { render } from 'ink';
import Markdown from '../src/Markdown.js';
import dedent from 'dedent';

const Demo = () => {
  const text = dedent`
  # Hello

  This is **markdown** printed in the \`terminal\`
`;

  return <Markdown>{text}</Markdown>;
};

render(<Demo />);
