import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userEmail, setUserEmail] = useState('');
  const [birthday, setBirthday] = useState("");
  return (
    <UserContext.Provider
      value={{
        userType,
        userPhone,
        userEmail,
        birthday,
        setUserType,
        setUserPhone,
        setUserEmail,
        setBirthday,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
