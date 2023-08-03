import {  BrowserRouter as Router, Routes, Route,Link, BrowserRouter }   
from 'react-router-dom';  
import Home from "./components/Home";
import LoginPage from './components/Loginpage';
import Dash from './redux/Dash';

function App(){
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/todo' element={<Dash/>} />
    </Routes>

    </BrowserRouter>
    </>
    

  );
}

export default App;
