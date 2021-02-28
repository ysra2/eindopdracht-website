import React, { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

function GlobalContextProvider({ children }) {
    const [loading, setLoading] = useState({
        status: 'pending',
        error: null,
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading({
                ...loading,
                status: 'done',
            })
        }, 3000)
    }, []);

    return (
        <GlobalContext.Provider value={{...loading}}>
            {loading.status === 'done' && children}
            {loading.status === 'pending' && <p>Loading...</p>}
        </GlobalContext.Provider>
    );
}


export {
    GlobalContext,
    GlobalContextProvider,
}

//Ik heb niet vanaf het begin met context gewerkt. Achteraf had ik dat beter wel
//Kunnen doen omdat er veel data van het ene component naar het ander wordt verstuurd.
//Deze Context is voor geplaatst om ervoor te zorgen dat het eerst alles controleert voordat de pagina is geladen.