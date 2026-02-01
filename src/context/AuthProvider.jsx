import { createContext } from "react";
import { useEffect, useState, getLocalStorage, setLocalStorage } from "../constants/imports";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;