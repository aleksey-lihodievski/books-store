import React from 'react';

import { InputBase } from './components/InputBase';
import { InputComponent } from './components/InputComponent';
import { InputLabel } from './components/InputLabel';

interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
}

const Input: React.FC<IInputProps> = () => {
  return (
    <InputComponent>
      <InputBase name='for' id='for' type='text' />
      <InputLabel htmlFor='for'>label</InputLabel>
    </InputComponent>
  );
};

export default Input;
