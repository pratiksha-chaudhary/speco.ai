import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userEmail, setUserEmail] = useState("");
  return (
    <UserContext.Provider
      value={{
        userType,
        userPhone,
        userEmail,
        setUserType,
        setUserPhone,
        setUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
