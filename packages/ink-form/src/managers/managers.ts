import { FloatFormFieldManager } from './FloatFormFieldManager.js';
import { IntegerFormFieldManager } from './IntegerFormFieldManager.js';
import { MultiSelectFormFieldManager } from './MultiSelectFormFieldManager.js';
import { SelectFormFieldManager } from './SelectFormFieldManager.js';
import { FormField, FormFieldManager, TypeOfField } from '../types.js';
import { StringFormFieldManager } from './StringFormFieldManager.js';
import { BooleanFormFieldManager } from './BooleanFormFieldManager.js';

export const managers: FormFieldManager<FormField>[] = [
  // @ts-expect-error
  new FloatFormFieldManager(),
  // @ts-expect-error
  new IntegerFormFieldManager(),
  // @ts-expect-error
  new MultiSelectFormFieldManager(),
  // @ts-expect-error
  new SelectFormFieldManager(),
  // @ts-expect-error
  new StringFormFieldManager(),
  // @ts-expect-error
  new BooleanFormFieldManager(),
];

export const getManager = (
  formFieldType: TypeOfField<FormField>,
  customManagers: FormFieldManager<FormField>[] = []
) => {
  return [...managers, ...customManagers].find(manager => manager.type === formFieldType);
};
