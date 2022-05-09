import React from 'react';
import { InputBase, InputComponent, InputLabel } from './styled';

interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
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
