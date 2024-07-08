import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {cartProducts} from './store/slices/cartSlice';
import Home from './pages/Home';
import PaymentSuccess from './pages/PaymentSuccess';
import Login from './pages/Login';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';

function App() {
  
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
