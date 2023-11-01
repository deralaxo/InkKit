import { Box, Text, render, useApp } from "ink";
import React from "react";
import MultiSelect from "../src/index.js";

type Items = { label: string; value: string | boolean | number | object }[];

const Preview = () => {
  const [focus, setFocus] = React.useState(0);

  const app = useApp();

  const items: Items = [
    {
      label: "Item 1",
      value: "item1",
    },
    {
      label: "Item 2",
      value: true,
    },
    {
      label: "Item 3",
      value: 3,
    },
    {
      label: "Item 4",
      value: { foo: "bar" },
    },
    { label: "Item 5", value: "item5" },
  ];

  return (
    <>
      {focus === 0 ? (
        <MultiSelect
          items={items}
          onSelect={(item) => console.log("selected", item)}
          onUnselect={(item) => console.log("unselected", item)}
          onSubmit={(arr) => {
            console.log("submitted", arr);
            setFocus(1);
          }}
          onHighlight={(item) => console.log("highlighted", item)}
          defaultSelected={[items[0]!, items[1]!]}
          focus={focus === 0}
          limit={4}
          checkboxComponent={({ isSelected }) => {
            return (
              <Box marginRight={2}>
                <Text color={isSelected ? "green" : "red"}>
                  {isSelected ? "X" : "O"}
                </Text>
              </Box>
            );
          }}
          indicatorComponent={({ isHighlighted }) => {
            return (
              <Box marginRight={1}>
                <Text color={"magenta"}>{isHighlighted ? ">" : " "}</Text>
              </Box>
            );
          }}
          itemComponent={({ isHighlighted, label }) => {
            return (
              <Box>
                <Text color={isHighlighted ? "blue" : "gray"}>{label}</Text>
              </Box>
            );
          }}
        />
      ) : (
        <Box>
          <MultiSelect
            items={items}
            focus={focus === 1}
            onSubmit={(arr) => {
              console.log("submitted second", arr);
              app.exit();
            }}
          />
        </Box>
      )}
      <Box marginY={2} flexDirection="column">
        <Text>---------------------</Text>
        <Text>Press enter to submit</Text>
        <Text>---------------------</Text>
      </Box>
    </>
  );
};

render(<Preview />);
