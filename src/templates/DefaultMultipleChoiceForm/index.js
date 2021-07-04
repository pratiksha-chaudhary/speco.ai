import Option from '../../components/Option';
import { useState } from 'react';
import './index.scss';

const DefaultMultipleChoiceForm = ({
  options,
  setResponse,
  freeFieldNeeded,
}) => {
  const [currentSelection, setCurrentSelection] = useState({});
  const handleClick = (val) => {
    const updatedResponse = {
      ...currentSelection,
      [val.id]: !currentSelection[val.id],
    };
    setCurrentSelection(updatedResponse);
    setResponse(updatedResponse);
  };
  return (
    <div className="DefaultMultipleChoiceForm">
      {options.map(({ name, id }, i) => (
        <Option
          key={i}
          onClick={() => {}}
          selected={currentSelection[id] === true}
          selectionClass="multiple-choice-selection"
        >
          <label className="checkbox option-padding">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => handleClick({ name, id })}
            />
            {name}
          </label>
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

export default DefaultMultipleChoiceForm;
