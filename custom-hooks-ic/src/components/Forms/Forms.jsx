import React, { useState } from 'react'
import useValidate from './useValidate';

const Forms = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isValidate = useValidate({ email, password });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isValidate);
    }

    return (
        <div style={{ height: "50%", width: "50%", margin: "auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Forms;