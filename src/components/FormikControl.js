import React from 'react';
import RadioButton from './RadioButton';
import Input from './Input';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
