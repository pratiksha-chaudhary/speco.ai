import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './index.scss';
const PhoneNumber = ({ setResponse }) => {
  const [value, setValue] = useState();
  const onChange = (val) => {
    setValue(val);
    setResponse(val);
  };
  return (
    <PhoneInput
      defaultCountry="IN"
      placeholder="Enter phone number"
      value={value}
      onChange={onChange}
    />
  );
};

export default PhoneNumber;
