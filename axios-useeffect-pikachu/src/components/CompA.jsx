import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    })
    return (
        <>
            <h1>You Chose <span style={{ color: "red" }}> {num} </span> value</h1>
            <h1>My name is  <span style={{ color: "red" }}>{name} </span></h1>
            <h2>I have <span style={{ color: "red" }}> {move}</span> Moves</h2>
            <select value={num} onChange={(e) => { setNum(e.target.value) }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default CompA