import React, { useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={"Googlke"}>{children}</AppContext.Provider>
    )
}

// custom Hook creation 
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };