import {  BrowserRouter as Router, Routes, Route,Link, BrowserRouter }   
from 'react-router-dom';  
import LoginPage from './pages/login/Loginpage';
import Dash from './components/Dash'; 
import Home from './pages/home/Home'

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
