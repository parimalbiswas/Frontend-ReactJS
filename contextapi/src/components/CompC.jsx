import React from 'react'
import { FirstName } from '../App'


const CompC = () => {
    return (
        <div>

            <FirstName.Consumer>{(fname) => { return <h1>Comp C {fname}</h1> }}</FirstName.Consumer>
        </div>
    )
}

export default CompC