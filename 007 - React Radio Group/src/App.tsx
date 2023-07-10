import './styles/index.scss';

import { FC, useState } from 'react';
import {
  RadioGroup,
  RadioGroupProps,
  Chip,
  HorizontalRule,
} from './components';
import withFormControl from './hoc/withFormControl';

const RadioGroupControl = withFormControl(RadioGroup);

const App: FC = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const onOptionChange: RadioGroupProps['onChange'] = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3', disabled: true },
  ];

  return (
    <div id="App">
      <RadioGroupControl
        label="Please select your option:"
        id="dummy-radio-group"
        name="dummy-radio-group"
        options={options}
        value={selectedOption}
        onChange={onOptionChange}
      />
      <HorizontalRule />
      <p className="remarks">
        <Chip label={selectedOption} /> is being selected.
      </p>
    </div>
  );
};

export default App;
