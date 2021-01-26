// import React, {useEffect, useState} from "react";
// import {createContext} from "istanbul-lib-report";
//
// //Houdt in de context bij of we:
// //gebruikersdata hebben
// //of de gebruikers geautoriseerd zijn
//
// const AuthContext = createContext({});
// //children property zorgt ervoor dat je deze authcontext om je app kunt plaatsen om zo de authorizatie te controleren
// function AuthContextProvider ({ children }) {
//     const [authState, setAuthState] = useState({
//         //Om de status op pending te zetten zorg je ervoor dat de applicatie gaat wachten
//         // totdat het genoeg informatie heeft verzameld
//         status: "pending",
//         error: null,
//         user: null,
//
//     })
//     //useEffect is een lifecycle method wat ervoor zorgt dat wij kunnen aangeven wanneer het iets moet verrichten.
//     //in de useEffect kun je in de anonieme functie effect: aangeven wat er moet gebeuren en
//     // bij de dependency array deps: zorg je ervoor dat het geen loop veroorzaakt.
//     useEffect(() => {}, []);
//
//
//     return(
//         <AuthContext.Provider>
//             {children}
//         </AuthContext.Provider>
//     );
// }
//
// export {
//     AuthContext,
//     AuthContextProvider
// }