import { NavLink } from 'react-router-dom';

import './index.scss';
const SubmitButton = ({ text, nextRoute }) => {
  return (
    <NavLink to={nextRoute} className="SubmitButton">
      <div>{text}</div>
    </NavLink>
  );
};

export default SubmitButton;
