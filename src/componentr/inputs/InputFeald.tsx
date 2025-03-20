import { type FC } from 'react';
import '../../styles/inputField.scss';

interface InputFieldProps {
  forInput: string;
  label: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ forInput, label, type }) => {
  return (
    <div className="wrapper-input">
      <label htmlFor={forInput} className="label">
        {label}
      </label>
      <input id={forInput} type={type} className="input" />
    </div>
  );
};

export default InputField;
