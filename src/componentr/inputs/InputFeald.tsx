import { type FC } from 'react';

interface InputFieldProps {
  forInput: string;
  label: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ forInput, label, type }) => {
  return (
    <div>
      <label htmlFor={forInput}>{label}</label>
      <input id={forInput} type={type} />
    </div>
  );
};

export default InputField;
