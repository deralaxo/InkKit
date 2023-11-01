import {
  FormFieldManager,
  FormFieldMultiSelect,
  FormFieldValueRendererProps,
  SpecificFormFieldRendererProps,
  TypeOfField,
} from '../types.js';
import React from 'react';
import { Box } from 'ink';
import MultiSelect from '@inkkit/ink-multi-select';

export class MultiSelectFormFieldManager implements FormFieldManager<FormFieldMultiSelect> {
  public type: TypeOfField<FormFieldMultiSelect> = 'multiselect';

  public renderField: React.FC<SpecificFormFieldRendererProps<FormFieldMultiSelect>> = props => (
    <Box borderStyle={'round'} width="100%">
      <MultiSelect
        items={props.field.options.map(option => ({ value: option.value, label: option.label ?? option.value }))}
        onSelect={option => props.onChange([...(props.value ?? []), option.value])}
        onUnselect={option => props.onChange((props.value ?? []).filter(value => value !== option.value))}
        defaultSelected={props.field.options.filter(option => props.value?.includes(option.value))}
      />
    </Box>
  );

  public renderValue: React.FC<FormFieldValueRendererProps<FormFieldMultiSelect>> = props => {
    return (
      <>
        {props.value?.length && props.value.length > 0 ? (
          <>
            {props.value.map((value, index) => (
              <React.Fragment key={value}>
                {index > 0 && ', '}
                {props.field.options.find(option => option.value === value)?.label ?? value}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{'No value'}</>
        )}
      </>
    );
  };
}
