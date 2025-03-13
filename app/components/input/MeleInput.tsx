import { forwardRef } from "react";
import TextforInput from "./TextforInput";

interface MeleInputProps {
  forInput: string;
  label: string;
  warnText: string;
  errors: Record<string, string>;
}

const MeleInput = forwardRef<HTMLSelectElement, MeleInputProps>(
  ({ forInput, label, warnText, errors }, ref) => {
    return (
      <div>
        <label htmlFor={forInput} className="block mb-2">{label}</label>
        <select ref={ref} id="gender" className="border p-2 w-full">
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
        <TextforInput errors={errors} warnText={warnText} forInput={forInput} />
      </div>
    );
  }
);

MeleInput.displayName = "InputField";

export default MeleInput;