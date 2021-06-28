import { useContext } from 'react';
import Option from '../../components/Option';
import UserContext from '../../context/userContext';
import './index.scss';

const Email = ({ setResponse }) => {
  const { userEmail, setUserEmail } = useContext(UserContext);
  const onChange = ({ target }) => {
    setResponse(target.value);
    setUserEmail(target.value);
  };
  return (
    <Option>
      <input
        onChange={onChange}
        placeholder="john.doe@gmail.com"
        value={userEmail}
      />
    </Option>
  );
};

export default Email;
