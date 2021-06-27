import React from 'react';
import SpecoLogo from '../../assets/images/speco-logo.svg';
import './index.scss';

function Header() {
  return (
    <img src={SpecoLogo} className="Header" alt="Speco company logo"></img>
  );
}
export default Header;
