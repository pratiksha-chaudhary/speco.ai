import Option from '../../components/Option';
import { useState } from 'react';
import './index.scss';

const DefaultChoiceForm = ({ options, setResponse, freeFieldNeeded }) => {
  const [currentSelection, setCurrentSelection] = useState();
  const handleClick = (val) => {
    setCurrentSelection(val);
    setResponse(val);
  };
  return (
    <div className="DefaultChoiceForm">
      {options.map((option, i) => (
        <Option
          key={i}
          onClick={() => handleClick(option)}
          selected={currentSelection === option}
        >
          {option}
        </Option>
      ))}
      {freeFieldNeeded && (
        <div className="option">
          <input />
        </div>
      )}
    </div>
  );
};

export default DefaultChoiceForm;
