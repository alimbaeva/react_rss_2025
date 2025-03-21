import { ChangeEvent, memo, useMemo, type FC } from 'react';
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
  const renderOptions = useMemo(
    () =>
      options?.map((el, id) => (
        <option key={id} value={el}>
          {el}
        </option>
      )),
    [options]
  );

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
          value={value}
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
          {renderOptions}
        </select>
      )}
    </div>
  );
};

export default memo(InputField);
