// import logo from './logo.svg';
import './App.css';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <Search />
      <Pagination />
      <Stories />

    </div>
  );
}

export default App;
