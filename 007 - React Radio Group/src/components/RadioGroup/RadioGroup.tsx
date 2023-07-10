import { FC, useState } from 'react';

export type RadioOptions = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

export interface RadioGroupProps {
  name: string;
  options: RadioOptions[];
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const onOptionChange: React.InputHTMLAttributes<
    HTMLInputElement
  >['onChange'] = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="radio-group">
      {options.map((option, index) => (
        <div key={option.value} className="radio-group__radio">
          <input
            id={`${name}-${index + 1}`}
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onOptionChange}
            disabled={option.disabled}
          />
          <label htmlFor={`${name}-${index + 1}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
