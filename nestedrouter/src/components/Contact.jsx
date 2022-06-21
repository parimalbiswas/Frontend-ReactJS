import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Header from './Header';

const Contact = () => {

    const navigate = useNavigate();
    const goTo = () => {
        navigate("/");
    }

    return (
        <div>

            {/* <Header /> */}
            <section>
                <h1>Contact</h1>
                <button onClick={() => goTo()}>Go to Home Page</button>
            </section>

        </div>
    )
}

export default Contact