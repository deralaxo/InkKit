# ink-image

Image component for [Ink 4](https://github.com/vadimdemedes/ink)

## Install

```
$ npm install @inkkit/ink-image
```

## Usage

```jsx
import React from 'react';
import { render } from 'ink';
import Image from '@inkkit/ink-image';

const Demo = () => {
  return <Image src="image.jpg" />;
};

render(<Demo />);
```

## Props

### src

Type: `string`

Path to the image. Can be either a local path or a URL.

### width

Type: `number`

Width of the image in characters.
Leave empty to automatically detect width based on terminal size. If the value is greater than terminal width, the image will be scaled down.

### height

Type: `number`

Height of the image in characters.
Leave empty to automatically detect height based on terminal size. If the value is greater than terminal height, the image will be scaled down.

### onError

Type: `function`

Callback function called when an error occurs while loading the image.

### onLoad

Type: `function`

Callback function called when the image is loaded.