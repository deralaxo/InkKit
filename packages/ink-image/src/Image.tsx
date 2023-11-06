import React, { useEffect, useState } from 'react';
import { Text } from 'ink';
import terminalImage from 'terminal-image';
import isUrl from 'is-url';
import fs from 'node:fs';
import https from 'node:https';
import http from 'node:http';
import temp from 'temp';

temp.track();

export type ImageProps = {
  /**
   * Path to the image. Can be either a local path or a URL.
   * @example
   * ```jsx
   * <Image src="dir/image.jpg" />
   * <Image src="https://example.com/image.jpg" />
   * ```
   */
  src: string;

  /**
   * Width of the image in characters.
   * Leave empty to automatically detect width based on terminal size. If the value is greater than terminal width, the image will be scaled down.
   */
  width?: number;

  /**
   * Height of the image in characters.
   * Leave empty to automatically detect height based on terminal size. If the value is greater than terminal height, the image will be scaled down.
   */
  height?: number;

  /**
   * Callback function called when an error occurs while loading the image.
   */
  onError?: (error: Error) => void;

  /**
   * Callback function called when the image is loaded.
   */
  onLoad?: () => void;
};

const Image = ({ src, width, height, onError, onLoad }: ImageProps) => {
  const [image, setImage] = useState('');
  const [source, setSource] = useState(isUrl(src) ? '' : src);

  useEffect(() => {
    if (!source && isUrl(src)) {
      temp.open('ink-image', (err, info) => {
        if (err) {
          onError?.(err);
          return;
        }

        const get = src.startsWith('http:') ? http.get : https.get;
        get(src, (res) => {
          if (res.statusCode !== 200) {
            onError?.(new Error(`Received ${res.statusCode} status code`));
            return;
          }

          const file = fs.createWriteStream(info.path);

          res.pipe(file);

          file.on('finish', () => {
            file.close();
            setSource(info.path);
          });
        });
      });
    }
  }, [source]);

  useEffect(() => {
    if (!source) return;

    terminalImage
      .file(source, { width, height })
      .then((image) => {
        setImage(image);
      })
      .catch((err) => {
        onError?.(err);
      })
      .finally(() => {
        onLoad?.();
      });
  }, [source]);

  return <Text>{image}</Text>;
};

export default Image;
