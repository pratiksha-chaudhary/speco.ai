import React from "react";
import SpecoLogo from "../../assets/images/speco-logo.svg";
import "./index.scss";

function Header() {
    return (
        <div className="Header">
            <img src={SpecoLogo} alt="Speco company logo"></img>
        </div>
    );
}
export default Header;
