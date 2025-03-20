import { ChangeEvent, type FC } from 'react';
import '../../styles/inputField.scss';

interface InputFieldProps {
  forInput: string;
  label: string;
  value?: string;
  type: string;
  options?: string[] | null;
  handleSelectChange?: (arg: ChangeEvent<HTMLSelectElement>) => void;
  handleChange?: (arg: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  forInput,
  label,
  value = '',
  type,
  options,
  handleSelectChange,
  handleChange,
}) => {
  return (
    <div className="wrapper-input">
      <label htmlFor={forInput} className="label">
        {label}
      </label>
      {forInput === 'search' ? (
        <input
          id={forInput}
          type={type}
          className="input"
          onChange={handleChange}
        />
      ) : (
        <select
          className="input"
          id={forInput}
          value={value}
          onChange={handleSelectChange}
        >
          <option value=""></option>
          {options &&
            options.map((el, id) => (
              <option key={id} value={el}>
                {el}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default InputField;
