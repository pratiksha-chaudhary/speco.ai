import { useContext } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import UserContext from '../../context/userContext';
import './index.scss';
const PhoneNumber = ({ setResponse }) => {
  const { userPhone, setUserPhone } = useContext(UserContext);

  const onChange = (val) => {
    setResponse(val);
    setUserPhone(val);
  }
  return (
    <PhoneInput
      defaultCountry="IN"
      placeholder="81234 56789"
      value={userPhone}
      onChange={onChange}
    />
  );
};

export default PhoneNumber;
