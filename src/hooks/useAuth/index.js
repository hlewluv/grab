import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Lưu trạng thái đăng nhập vào localStorage để không bị mất khi reload
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    ); 

    const login = () => {
        console.log("Logged in!");
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    };

    const logout = () => {
        console.log("Logged out!");
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
