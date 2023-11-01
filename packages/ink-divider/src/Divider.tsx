import React from "react";
import { Box, Text, TextProps } from "ink";
import stringWidth from "string-width";

// Helpers
const getSideDividerWidth = (width: number, titleWidth: number) =>
  (width - titleWidth) / 2;
const getNumberOfCharsPerWidth = (char: string, width: number) =>
  width / stringWidth(char);

const PAD = " ";

type DividerProps = {
  title?: string;
  width?: number;
  padding?: number;
  titlePadding?: number;
  titleColor?: TextProps["color"];
  dividerChar?: string;
  dividerColor?: TextProps["color"];
};

const Divider = ({
  title = "",
  width = 50,
  padding = 1,
  titlePadding = 1,
  titleColor = "white",
  dividerChar = "─",
  dividerColor = "grey",
}: DividerProps) => {
  const titleString = title
    ? `${PAD.repeat(titlePadding) + title + PAD.repeat(titlePadding)}`
    : "";
  const titleWidth = stringWidth(titleString);

  const dividerWidth = getSideDividerWidth(width, titleWidth);
  const numberOfCharsPerSide = getNumberOfCharsPerWidth(
    dividerChar,
    dividerWidth
  );
  const dividerSideString = dividerChar.repeat(numberOfCharsPerSide);

  const paddingString = PAD.repeat(padding);

  return (
    <Box flexDirection="row">
      <Text>
        {paddingString}
        <Text color={dividerColor}>{dividerSideString}</Text>
        <Text color={titleColor}>{titleString}</Text>
        <Text color={dividerColor}>{dividerSideString}</Text>
        {paddingString}
      </Text>
    </Box>
  );
};

export default Divider;
