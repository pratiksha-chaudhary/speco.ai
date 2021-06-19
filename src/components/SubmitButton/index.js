import { Link } from "react-router-dom";

import "./index.scss";
const SubmitButton = ({ text, nextRoute }) => {
    return (
        <div className="SubmitButton">
            <Link to={nextRoute}>{text}</Link>
        </div>
    );
};

export default SubmitButton;
