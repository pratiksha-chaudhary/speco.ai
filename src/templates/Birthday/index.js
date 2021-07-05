import { useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Option from '../../components/Option';
import UserContext from '../../context/userContext';
import './index.scss';
import 'react-datepicker/dist/react-datepicker.css';

const calculate_age = (dob1) => {
  var today = new Date();
  var birthDate = new Date(dob1);
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
};

const Birthday = ({ setResponse }) => {
  const { birthday, setBirthday } = useContext(UserContext);

  useEffect(() => {
    setResponse(birthday);
  }, [birthday, setResponse]);

  const setStartDate = (dob) => {
    const age = calculate_age(dob);
    setBirthday(dob);
    setResponse(age);
  };
  return (
    <Option className="option-padding">
      <DatePicker
        selected={birthday}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={(date) => setStartDate(date)}
      />
    </Option>
  );
};

export default Birthday;
