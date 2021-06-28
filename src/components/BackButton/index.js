import { NavLink } from 'react-router-dom';

import './index.scss';

const BackButton = ({ text, nextRoute, disabled }) => {
  return (
    <NavLink to={disabled ? '#' : nextRoute} className="BackButton">
      <div className={`${disabled ? 'disabled' : ''}`}>{text}</div>
    </NavLink>
  );
};

export default BackButton;
