import React, { FC, useState } from "react";
import { Box, Text } from "ink";

import QuickSearch from "../src/QuickSearchInput.js";

export const Example1Name = "Basic";

export const Example1: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <Text>Example 1: {Example1Name}</Text>
      <Text color={"green"}>Selected item is {selectedValue}</Text>
      <Box key="spacer" marginBottom={2} />
      <QuickSearch
        {...{
          items: [
            { value: 1, label: "Animal" },
            { value: 3, label: "Antilope" },
            { value: 2, label: "Animation" },
            { value: 0, label: "Animate" },
            { value: 4, label: "Arizona" },
            { value: 5, label: "Aria" },
            { value: 6, label: "Arid" },
          ],
          onSelect: (item) => setSelectedValue(item.label),
        }}
      />
    </>
  );
};
