import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import SubmitButton from "../../components/SubmitButton";
import User from "../../components/User";
import userType from "../../constants/user-type";
import "./index.scss";

function Register() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="Register">
            <h2 className="header">I am a</h2>
            <div className="user-list">
                <User
                    userType={userType.DOCTOR}
                    title="Medical Practitioner"
                    setUserType={setUser}
                    currentUser={user}
                />
                <User
                    userType={userType.PATIENT}
                    title="Patient"
                    setUserType={setUser}
                    currentUser={user}
                />
            </div>
            <SubmitButton text="Next" nextRoute={`/survey/0`} />
        </div>
    );
}

export default Register;
