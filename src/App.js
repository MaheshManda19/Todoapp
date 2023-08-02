import {  BrowserRouter as Router, Routes, Route,Link, BrowserRouter }   
from 'react-router-dom';  
import Home from "./Home";
import LoginPage from "./loginpage";
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
