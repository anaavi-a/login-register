import logo from './logo.svg';
import './App.css';
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './context/authContext';

function App() {

  const { currentUser } = useContext(AuthContext)
  //console.log(currentUser)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
