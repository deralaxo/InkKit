import { render } from 'ink';
import { Form } from '../src/Form.js';
import React from 'react';
import { AbstractFormField, FormFieldString } from '../src/types.js';
import TextInput from 'ink-text-input';

type CustomField = AbstractFormField<'custom', string> & { length: number };

// Refactoring that is beyond me right now

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

              if (value.length > props.value.length) {
                props.onError(
                  `Value is too long, should be less or equal than ${props.value.length}`,
                );
              } else {
                props.onClearError();
              }
            }}
            placeholder={(props.field as FormFieldString).placeholder}
          />
        ),
      },
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
            } as CustomField as any,
          ],
        },
      ],
    }}
  />,
);
