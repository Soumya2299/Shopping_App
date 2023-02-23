import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Guard from './Components/Guard';


function App() {
  let stat = JSON.parse(localStorage.getItem("stat"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home stat={stat} />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/cart' element={<Guard Cmp= {Cart}  />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
