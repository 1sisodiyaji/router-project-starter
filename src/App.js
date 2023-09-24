import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return
  ( 
     <div className="w-screen h-screen bg-richblack-900 flex flex-col">
         <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
         <Routes>
           <Route path="/" element = {<Home isLoggedIn ={isLoggedIn}/>}/>
           <Route path="/login" element = {<Login setIsLoggedIn ={setIsLoggedIn}/>}/>
           <Route path="/signup" element = {<signup setIsLoggedIn ={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn ={isLoggedIn}>
            <Dashboard/>
            </PrivateRoute>
          }/>
         </Routes>
      </div>
        
  )
}

export default App;
