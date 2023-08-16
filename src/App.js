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
import TasksContainer from "./components/TasksContainer";
function App() {
  const location = useLocation();
  const {login , setLogin,id } = useContext(AppContext)
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
        <Route path="/Start-Challenge/*" element={<TasksContainer/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
