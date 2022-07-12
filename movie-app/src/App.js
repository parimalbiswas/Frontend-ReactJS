// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
