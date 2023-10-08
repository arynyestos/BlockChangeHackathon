import React, { useState, createContext, useContext } from 'react';

// Create the Context
const UserContext = createContext();

// Create the Provider Component
export const UserContextProvider = ({ children }) => {
    const [filter, setFilter] = useState("");

    return (
        <UserContext.Provider value={{ filter, setFilter }}>
            {children}
        </UserContext.Provider>
    );
}

// Custom hook to use the UserContext
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}
