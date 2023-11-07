import React from 'react';
import { Text } from 'ink';
import {parse, setOptions} from 'marked';
import TerminalRenderer, { TerminalRendererOptions } from 'marked-terminal';

export type MarkdownProps =  TerminalRendererOptions & {
  children: string;
};

const Markdown = ({children, ...options }: MarkdownProps) => {
  setOptions({
    renderer: new TerminalRenderer(options),
  });
  return <Text>{parse(children).trim()}</Text>;
};

export default Markdown;
