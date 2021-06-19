import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// export const UserConsumer = ({user, setUser, children}) => {
//     return (
//         <UserContext.Consumer>{children}</UserContext.Consumer>
//     )
// }

export default UserContext;
