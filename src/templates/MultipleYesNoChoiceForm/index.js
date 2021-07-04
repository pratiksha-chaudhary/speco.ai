import { useState, useEffect } from 'react';
import Option from '../../components/Option';
import SwitchToggle from '../../components/SwitchToggle';
import './index.scss';

const MultipleYesNoChoiceForm = ({ options, setResponse }) => {
  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const handleClick = (val, index) => {
    setChecked((prev) => {
      const updated = [...prev];
      updated[index] = !prev[index];
      return updated;
    });
  };

  useEffect(() => {
    setResponse(checked);
  }, [checked, setResponse]);

  return (
    <div className="MultipleYesNoChoiceForm">
      {options.map((option, i) => (
        <Option
          selected={false}
          key={i}
          className="toggle-option"
          selectionClass="single-choice-selection"
        >
          <label className="container-label option-padding">
            <span>{option}</span>
            <SwitchToggle
              className="switch-toggle"
              overrideLabel={true}
              onClick={() => handleClick(option, i)}
            />
          </label>
        </Option>
      ))}
    </div>
  );
};

export default MultipleYesNoChoiceForm;
