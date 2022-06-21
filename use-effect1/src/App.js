// import logo from './logo.svg';
import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You Clicked Me ${num} times`;
  })

  return (
    <div className="App">
      <button onClick={() => { setNum(num + 1) }}>Click ME</button>
      <h1>You Clicked me {num} times</h1>
    </div>
  );
}

export default App;