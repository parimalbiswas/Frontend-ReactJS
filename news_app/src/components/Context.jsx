import React, { useContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

let API = `http://hn.algolia.com/api/v1/search?`;

const initialState = {
    isloading: true,
    query: "CSS",
    number_of_page: 0,
    page: 0,
    hits: [],

}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [stare, dispatch] = useReducer(Reducer, initialState);



    const fetchAPIData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({ type: "GET_STORIES", payload: { hits: data.hits } })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAPIData(`${API}query=${initialState.query}&page=${initialState.page}`);
    }, [])


    return (
        <AppContext.Provider value={"Googlke"}>{children}</AppContext.Provider>
    )
}

// custom Hook creation 
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };