import { useContext, useEffect, useState } from 'react';
import Option from '../../components/Option';
import UserContext from '../../context/userContext';
import './index.scss';

const isInvalid = (val, type) => {
  const num = parseInt(val);

  if (isNaN(num)) return true;
  if (type === 'day') {
    return num < 1 || num > 31;
  }

  if (type === 'month') {
    return num < 1 || num > 12;
  }

  if (type === 'year') {
    return num < 1000 || num > new Date().getFullYear();
  }
};

const Birthday = ({ setResponse }) => {
  const { birthday, setBirthday } = useContext(UserContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    setResponse(birthday);
  }, [birthday, setResponse]);

  const onChange = ({ target }) => {
    setBirthday(target.value);
    var date1 = target.value.split('/');
    if (
      date1.length < 3 ||
      isInvalid(date1[0], 'day') ||
      isInvalid(date1[1], 'month') ||
      isInvalid(date1[2], 'year')
    ) {
      setError(true);
      return;
    }

    var newDate = date1[1] + '/' + date1[0] + '/' + date1[2];

    var date = new Date(newDate);

    const parsedDate = date.toLocaleDateString('en-GB');
    setResponse(parsedDate);
    setError(false);
  };
  return (
    <Option className={`option-padding ${error ? 'error' : ''}`}>
      <input onChange={onChange} placeholder="DD/MM/YYYY" value={birthday} />
    </Option>
  );
};

export default Birthday;
