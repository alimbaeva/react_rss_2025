import { forwardRef, type FC } from "react";
import TextforInput from "./TextforInput";

interface InputFieldProps {
  forInput: string;
  label: string;
  type: string;
  warnText: string;
  errors: Record<string, string>;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ forInput, label, type, warnText, errors }, ref) => {
    return (
      <div>
        <label htmlFor={forInput} className="block mb-2">{label}</label>
        {type === 'number' && <input ref={ref} id={forInput} type={type} min="1" className="border p-2 w-full" />}
        {type !== 'number' && <input ref={ref} id={forInput} type={type} className="border p-2 w-full" />}
        <TextforInput errors={errors} warnText={warnText} forInput={forInput} />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
