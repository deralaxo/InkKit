import React, { useCallback, useState } from "react";
import { Box, useInput } from "ink";
import Indicator from "./components/Indicator.js";
import ItemComponent from "./components/Item.js";
import CheckBox from "./components/Checkbox.js";

type Item<T> = {
  label: string;
  value: T;
  key?: string | number;
};

type MultiSelectProps<T> = {
  items: Item<T>[];
  defaultSelected?: Item<T>[];
  focus?: boolean;
  initialIndex?: number;
  indicatorComponent?: React.FC<{ isHighlighted: boolean }>;
  checkboxComponent?: React.FC<{ isSelected: boolean }>;
  itemComponent?: React.FC<{ isHighlighted: boolean; label: string }>;
  limit?: number | null;
  onSelect?: (selectedItem: Item<T>) => void;
  onUnselect?: (unselectedItem: Item<T>) => void;
  onSubmit?: (selectedItems: Item<T>[]) => void;
  onHighlight?: (highlightedItem: Item<T>) => void;
};

const MultiSelect = function <T>({
  items = [],
  defaultSelected = [],
  focus = true,
  initialIndex = 0,
  indicatorComponent = Indicator,
  checkboxComponent = CheckBox,
  itemComponent = ItemComponent,
  limit = null,
  onSelect = () => {},
  onUnselect = () => {},
  onSubmit = () => {},
  onHighlight = () => {},
}: MultiSelectProps<T>) {
  const [highlightedIndex, setHighlightedIndex] = useState(initialIndex);
  const [selectedItems, setSelectedItems] = useState(defaultSelected);

  const hasLimit = limit !== null && limit < items.length;

  const slicedItems = hasLimit ? items.slice(0, limit) : items;

  const includesItems = (item: Item<T>, selectedItems: Item<T>[]) => {
    return (
      selectedItems.filter(
        (selectedItem) =>
          selectedItem.value === item.value && selectedItem.label === item.label
      ).length > 0
    );
  };

  const handleSelect = useCallback(
    (item: Item<T>) => {
      if (includesItems(item, selectedItems)) {
        const newSelectedItems = selectedItems.filter(
          (selectedItem) =>
            selectedItem.value !== item.value &&
            selectedItem.label !== item.label
        );
        setSelectedItems(newSelectedItems);
        onUnselect(item);
      } else {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);
        onSelect(item);
      }
    },
    [selectedItems, onSelect, onUnselect, setSelectedItems]
  );

  const handleSubmit = useCallback(() => {
    onSubmit(selectedItems);
  }, [selectedItems, onSubmit]);

  useInput(
    useCallback(
      (input, key) => {
        if (key.upArrow) {
          setHighlightedIndex((prevIndex) => {
            const index =
              prevIndex === 0 ? slicedItems.length - 1 : prevIndex - 1;
            onHighlight(slicedItems[index]!);
            return index;
          });
        } else if (key.downArrow) {
          setHighlightedIndex((prevIndex) => {
            const index =
              prevIndex === slicedItems.length - 1 ? 0 : prevIndex + 1;
            onHighlight(slicedItems[index]!);
            return index;
          });
        } else if (key.return) {
          handleSubmit();
        } else if (input === " ") {
          handleSelect(slicedItems[highlightedIndex]!);
        }
      },
      [
        setHighlightedIndex,
        onHighlight,
        handleSelect,
        handleSubmit,
        slicedItems,
        highlightedIndex,
      ]
    ),
    { isActive: focus }
  );

  return (
    <Box flexDirection="column">
      {slicedItems.map((item, index) => {
        const key = item.key || item.label;
        const isHighlighted = index === highlightedIndex;
        const isSelected = includesItems(item, selectedItems);

        return (
          <Box key={key}>
            {React.createElement(indicatorComponent, { isHighlighted })}
            {React.createElement(checkboxComponent, { isSelected })}
            {React.createElement(itemComponent, {
              ...item,
              isHighlighted,
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default MultiSelect;

export { Indicator, ItemComponent, CheckBox, Item };
