import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './index.scss';
const PhoneNumber = ({ setResponse }) => {
  return (
    <PhoneInput
      defaultCountry="IN"
      placeholder="81234 56789"
      onChange={setResponse}
    />
  );
};

export default PhoneNumber;
