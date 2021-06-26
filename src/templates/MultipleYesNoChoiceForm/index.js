import { useState } from 'react';
import './index.scss';

const MultipleYesNoChoiceForm = ({ options, setResponse, freeFieldNeeded }) => {
  const [currentSelection, setCurrentSelection] = useState();
  const [checked, setChecked] = useState(new Array(options.length).fill(false));
  const handleClick = (val, index) => {
    setCurrentSelection(val);
    setChecked((prev) => {
      const updated = [...prev];
      updated[index] = !prev[index];
      setResponse(updated);
      return updated;
    });
  };
  return (
    <div className="MultipleYesNoChoiceForm">
      {options.map((option, i) => (
        <label
          className={`option ${currentSelection === option && 'selected'} ${i}`}
          key={i}
        >
          <span>{option}</span>
          <div className="toggle">
            <input
              name="switch"
              type="checkbox"
              value={checked[i]}
              onChange={() => {
                handleClick(option, i);
              }}
              defaultChecked={false}
            />
            <label htmlFor="switch" className="on-button">
              Yes
            </label>
            <label htmlFor="switch" className="off-button">
              No
            </label>
          </div>
        </label>
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
