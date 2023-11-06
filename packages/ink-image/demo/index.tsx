import React, { useState } from 'react';
import { Text, render } from 'ink';
import Image from '../src/Image.js';

const Demo = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Text>Loading...</Text>}
      {!loading && <Text>Done!</Text>}
      <Image
        src="demo/react.png"
        onLoad={() => setLoading(false)}
        onError={(err) => console.log(err)}
        height={30}
        width={30}
      />
    </>
  );
};

render(<Demo />);
