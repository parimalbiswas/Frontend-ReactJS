import React from 'react'
import { useNavigate } from 'react-router-dom';

// import Header from './Header';
const About = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate("/contact");
    }

    return (
        <div>
            {/* <Header/> */}
            <section>
                <h1>About</h1>
                <button onClick={() => goTo()}>Go to Contact PAge</button>
                <button onClick={() => { navigate(-1); }}>Go back to previous page</button>
            </section>
        </div>
    )
}

export default About