import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
