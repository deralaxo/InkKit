# ink-divider

Divider component for [Ink 4](https://github.com/vadimdemedes/ink)

Refactored version of [Jure's ink-divider](https://github.com/JureSotosek/ink-divider)

![Demo example](https://github.com/deralaxo/InkKit/blob/main/packages/ink-divider/demo/demo.jpg?raw=true)

## Install

```
$ npm install @inkkit/ink-divider
```

## Usage

```jsx
import React from 'react';
import { render } from 'ink';
import Divider from '@inkkit/ink-divider';

const Demo = () => {
  return <Divider title="Title" />;
};

render(<Demo />);
```

## Props

### title

Type: `string`<br>
Default: `""`

Title shown in the middle of the divider.

### width

Type: `number`<br>
Default: `50`

Width of the divider.

### padding

Type: `number`<br>
Default: `1`

Padding at the start and the end of the divider.

### titlePadding

Type: `number`<br>
Default: `1`

Padding besides the title in the middle.

### titleColor

Type: `string`<br>
Default: `"white"`

Color of the title.

Takes the same values as `<Text>` color property.

### dividerChar

Type: `string`<br>
Default: `"-"`

Char used as a divider.

### dividerColor

Type: `string`<br>
Default: `"gray"`

Color of the divider chars.

Takes the same values as `<Text>` color property.
