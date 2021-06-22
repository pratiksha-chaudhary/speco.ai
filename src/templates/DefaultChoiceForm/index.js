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
      {options.map((option) => (
        <div
          className={`option ${currentSelection === option && "selected"}`}
          onClick={() => handleClick(option)}
        >
          {option}
        </div>
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
