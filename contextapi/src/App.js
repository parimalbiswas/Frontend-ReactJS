// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import CompA from './components/CompA';

const FirstName = createContext();
// const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"parimal"}>
        {/* <LastName.Provider value={"biswas"}> */}
          <CompA />
        {/* </LastName.Provider> */}
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName };
