// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import { useGlobalContext } from './components/Context';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';




function App() {

  const data = useGlobalContext();

  return (

    <div className="App">

      <h2>Jio {data}</h2>
      <Search />
      <Pagination />
      <Stories />

    </div>

  );
}

export default App;
