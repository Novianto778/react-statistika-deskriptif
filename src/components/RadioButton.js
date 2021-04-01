import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const RadioButton = ({ label, name, options, mt, ...rest }) => {
  return (
    <div className={`form-control mt-${mt}`}>
      <label htmlFor={name} className="block">
        {label}
      </label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <div key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value} className="ml-1">
                {option.key}
              </label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
