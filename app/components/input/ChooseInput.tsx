import { forwardRef } from "react";
import TextforInput from "./TextforInput";

interface ChooseInputProps {
  forInput: string;
  warnText: string;
  errors: Record<string, string>;
}

const ChooseInput = forwardRef<HTMLInputElement, ChooseInputProps>(
  ({ forInput, warnText, errors }, ref) => {
    return (
      <div className={errors.age ? "" : "pb-5"}>
        <label className="flex items-center">
          <input ref={ref} type="checkbox" className="mr-2" />
          I accept the terms of use
        </label>
        <TextforInput errors={errors} warnText={warnText} forInput={forInput} />
      </div>
    );
  }
);

ChooseInput.displayName = "InputField";

export default ChooseInput;