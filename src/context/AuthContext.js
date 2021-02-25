import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
    })
    useEffect(() => {
        setTimeout(() => {
            setAuthState({
                ...authState,
                status: 'done',
            })
        }, 3000)
    }, []);

    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export {
    AuthContext,
    AuthContextProvider,
}
