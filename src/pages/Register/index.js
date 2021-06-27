import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import SubmitButton from '../../components/SubmitButton';
import User from '../../components/User';
import userType from '../../constants/user-type';
import './index.scss';
import BackButton from '../../components/BackButton';

function Register() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
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
      <div className="navigation">
        <BackButton nextRoute={`/`} />
        <SubmitButton text="Next" nextRoute={`/survey/0`} disabled={!user} />
      </div>
    </>
  );
}

export default Register;
