import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '~/store/store';
import TextforInput from './TextforInput';

interface CountrySelectProps {
  label: string;
  warnText: string;
  errors: Record<string, string>;
  forInput: string;
}

const CountrySelect = forwardRef<HTMLInputElement, CountrySelectProps>(
  ({ forInput, label, warnText, errors }, ref) => {
    const countries = useSelector((state: RootState) => state.countries.countries);

    return (
      <div>
        <label htmlFor={forInput} className="block mb-2">{label}</label>
        <input
          ref={ref}
          type="text"
          id={forInput}
          list="countries-list"
          className="border p-2 w-full"
          placeholder="Start typing country"
        />
        <datalist id="countries-list">
          {countries.map((el, id) => (
            <option key={id} value={el} />
          ))}
        </datalist>
        <TextforInput errors={errors} warnText={warnText} forInput={forInput} />
      </div>
    );
  }
);

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
