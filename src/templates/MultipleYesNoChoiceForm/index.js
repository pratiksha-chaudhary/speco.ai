import { useState } from 'react';
import './index.scss';

const MultipleYesNoChoiceForm = ({ options, setResponse, freeFieldNeeded }) => {
  const [currentSelection, setCurrentSelection] = useState();
  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const handleClick = (val, index) => {
    setCurrentSelection(val);
    setResponse(val);
    setChecked((prev) => {
      prev[index] = !prev[index];
      return [...prev];
    });
  };
  return (
    <div className="MultipleYesNoChoiceForm">
      {options.map((option, i) => (
        <>
          <label
            className={`option ${currentSelection === option && 'selected'}`}
            key={i}
          >
            <span>{option}</span>
            <div class="toggle">
              <input id="switch" type="checkbox" />
              <label for="switch" className="on-button">
                On
              </label>
              <label for="switch" className="off-button">
                Off
              </label>
            </div>
          </label>
        </>
      ))}
      {freeFieldNeeded && (
        <div className="option">
          <input />
        </div>
      )}
    </div>
  );
};

export default MultipleYesNoChoiceForm;
