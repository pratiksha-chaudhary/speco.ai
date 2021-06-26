import Option from '../../components/Option';
import './index.scss';

const Email = ({ setResponse }) => {
  return (
    <Option>
      <input onChange={setResponse} placeholder="john.doe@gmail.com" />
    </Option>
  );
};

export default Email;
