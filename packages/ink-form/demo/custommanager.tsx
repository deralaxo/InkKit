import { render } from 'ink';
import { Form } from '../src/Form.js';
import React from 'react';
import { AbstractFormField, FormFieldManager } from '../src/types.js';
import TextInput from '@inkkit/ink-text-input';

type CustomField = AbstractFormField<'custom', string> & { placeholder: string; length: number };
type CustomManager = FormFieldManager<CustomField>;

render(
  <Form
    onSubmit={(value) => console.log(`Submitted: `, value)}
    customManagers={[
      {
        type: 'custom',
        renderValue: ({ value, field: _ }) => <>{value}</>,
        renderField: (props) => (
          <TextInput
            value={props.value ?? ''}
            onChange={(value) => {
              props.onChange(value);
              if (props.value && value.length > props.field.length) {
                props.onError(
                  `Value is too long, should be less or equal than ${props.field.length} characters.`,
                );
              } else {
                props.onClearError();
              }
            }}
            placeholder={props.field.placeholder}
          />
        ),
      } as CustomManager,
    ]}
    form={{
      title: 'Custom Form Field Manager',
      sections: [
        {
          title: 'Main',
          description: 'Demonstration of how custom field implementations can be used.',
          fields: [
            {
              type: 'custom',
              name: 'Custom field',
              length: 10,
              description: 'I may not be longer than 10 characters',
              placeholder: 'Enter a value',
            } as CustomField,
          ],
        },
      ],
    }}
  />,
);
