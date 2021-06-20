import { NavLink } from 'react-router-dom';

import './index.scss';

const SubmitButton = ({ text, nextRoute, disabled }) => {
  return (
    <NavLink to={disabled ? '#' : nextRoute} className="SubmitButton">
      <div className={`${disabled ? 'disabled' : ''}`}>{text}</div>
    </NavLink>
  );
};

export default SubmitButton;
