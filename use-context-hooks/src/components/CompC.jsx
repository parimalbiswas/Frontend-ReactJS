import React, { useContext } from 'react'
import { FirstName, LastName } from '../App'


const CompC = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1>Comp C {fname} {lname}</h1>
        </>
    )
}

export default CompC