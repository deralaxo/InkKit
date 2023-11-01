import React from "react";
import { Text } from "ink";

type ItemProps = {
  isHighlighted: boolean;
  label: string;
};

const Item = ({ isHighlighted = false, label }: ItemProps) => (
  <Text color={isHighlighted ? "blue" : undefined}>{label}</Text>
);

export default Item;
