import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './index.scss';
const PhoneNumber = ({ setResponse }) => {
  return (
    <PhoneInput
      defaultCountry="IN"
      placeholder="Enter your phone number"
      onChange={setResponse}
    />
  );
};

export default PhoneNumber;
