import React, { HTMLInputTypeAttribute, useId, useMemo } from 'react';

import { blockInvalidChar } from 'helpers/Input';
import { ErrorMessage } from './components/ErrorMessage';
import { InputBase } from './components/InputBase';
import { InputComponent } from './components/InputComponent';
import { InputLabel } from './components/InputLabel';
import { InputMainArea } from './components/InputMainArea';

interface IInputProps<T> {
  name?: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  defaultValue?: T;
  value?: T;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string | boolean;
}

const Input = <T extends string | number>({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  disabled,
  name,
  type,
  label,
  defaultValue,
  value,
  error,
  required,
}: IInputProps<T>) => {
  const id = useId();

  const inputHasValue = useMemo(() => {
    const result = value ?? false;
    if (typeof result === 'number') {
      return true;
    }
    return !!result;
  }, [value]);

  return (
    <InputComponent>
      <InputMainArea>
        <InputLabel
          labelActive={inputHasValue || Boolean(placeholder)}
          htmlFor={id}
        >
          {label}
          {required && '*'}
        </InputLabel>
        <InputBase
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={type === 'number' ? blockInvalidChar : undefined}
          error={!!error}
          disabled={disabled}
        />
      </InputMainArea>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputComponent>
  );
};

export default React.memo(Input);
