import React from 'react'
import "./UseReducer.css"
import { Button } from "@mui/material";
import { useReducer } from 'react';

var initialState = 0;

const reducer = (state, action) => {

    console.log(state, action);

    if (action.type === "INCREAMENT") {
        return state + 1;
    }
    if (action.type === "DECREAMET") {
        return state - 1;
    }
    if (action.type === "MULTIPLY") {
        return state * 2;
    }
    if (action.type === "DEVISION") {
        return state / 2;
    }
    return state;

    // switch (state, action) {
    //     case "INCREAMENT": return state + 1;
    //     case "DECREAMET": return state - 1;
    //     case "MULTIPLY": return state * 2;
    //     case "DEVISION": return state / 2;
    //     default: return state;
       
    // }



}


const Usereducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>{state}</h2>
            <div className="button">
                <Button variant="contained" onClick={() => dispatch({ type: "INCREAMENT" })}>INCREAMENT</Button>
                <Button variant="contained" onClick={() => dispatch({ type: "DECREAMET" })}>DECREMET</Button>
                <Button variant="contained" onClick={() => dispatch({ type: "MULTIPLY" })}>MULTIPLY</Button>
                <Button variant="contained" onClick={() => dispatch({ type: "DEVISION" })}>DEVISION</Button>
            </div>
        </div>
    )
}

export default Usereducer