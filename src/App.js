import './App.css';
import {Routes, Route} from 'react-router-dom'
// import 
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import Home from './components/Home';
import Challenges from './components/Challenges'
import Day from './components/Day'
function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element= {<Signup/>}></Route>
      <Route path ='/' index element={<Home/>}></Route>
      <Route path ='/Challenges'  element={<Challenges/>}></Route>
      <Route path='/quitsmoke' element ={<Day title ="Quit Smoke" task = "Don't Smoke "/>}></Route>
      <Route path = '*' element={<NotFound/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
