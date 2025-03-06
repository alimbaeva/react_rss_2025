'use client';

import React, { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  testId: string;
}

const InputField: FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  testId,
}) => (
  <div className="input-wrapper">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testId}
    />
  </div>
);

export default InputField;
