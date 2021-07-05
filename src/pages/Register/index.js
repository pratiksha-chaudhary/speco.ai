import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import SubmitButton from '../../components/SubmitButton';
import User from '../../components/User';
import USER_TYPE from '../../constants/user-type';
import './index.scss';
import BackButton from '../../components/BackButton';

function Register() {
  const { userType, setUserType } = useContext(UserContext);
  return (
    <>
      <h2 className="question">I am a</h2>
      <div className="user-list">
        <User
          userType={USER_TYPE.DOCTOR}
          title="Medical Practitioner"
          setUserType={setUserType}
          currentUser={userType}
        />
        <User
          userType={USER_TYPE.PATIENT}
          title="Patient"
          setUserType={setUserType}
          currentUser={userType}
        />
      </div>
      <div className="navigation">
        <BackButton nextRoute={`/`} />
        <SubmitButton text="Next" nextRoute={`/survey/0`} disabled={!userType} />
      </div>
    </>
  );
}

export default Register;
