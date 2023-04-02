import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Challenges from "./components/Challenges";
import Day from "./components/Day";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const location = useLocation();
  const {login , setLogin} = useContext(AppContext)
  useEffect(() =>{
    // Update the document title using the browser API
   
   console.log("welcome"); 
   const path = location.pathname;
   console.log(path)
   if(path.length > 1){
    setLogin(true);

   }
    
  },[location.pathname]);
  return (
   
    <div className="App">
    
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/Challenges" element={<Challenges />}></Route>
        <Route path="/quitsmoke" element={<Day title="Quit Smoke"/>}></Route>
        <Route path="/startreading" element={<Day title="Daily Reading"/>}></Route>
        <Route path="/wakeupearly" element={<Day title="Wake Up Early" />}></Route>
        <Route path="/meditate" element={<Day title="Meditate Daily" />}></Route>
        <Route path="/quitphone" element={<Day title="Quit phone" />}></Route>
        <Route path="/moneymanagement" element={<Day title="Manage Money" />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
