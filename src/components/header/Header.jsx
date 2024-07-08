import React, { useEffect, useState } from 'react'
import myIcon from "../../assets/images/food_delivery_icon.png"
import cartIcon from "../../assets/icons/cart.svg"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Button from '../elements/Button'
import { useSelector } from "react-redux";
import { cartProducts } from '../../store/slices/cartSlice';



function Header() {
    const cartProductList = useSelector(cartProducts);
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/")
    }

    const checkAuthToken = () => {
        const token = sessionStorage.getItem('Auth token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
       checkAuthToken();

        // window.addEventListener('storage', checkAuthToken);
        const handleStorageChange = () => {
            checkAuthToken();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
        // return () => {
        //     window.removeEventListener('storage', checkAuthToken);
        // }
    }, [])

    useEffect(() => {
        checkAuthToken();
    }, [location]);

    return (
        <nav className="bg-[#FCDE58] text-white fixed top-0 w-full  z-50 border-none">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center text-black no-underline font-bold text-2xl lg:text-4xl">
                        <img src={myIcon} alt="logo" className="w-12 h-12 mr-2 scooter-animation" />
                        Food-E
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link to="/cart" className="relative">
                                <img src={cartIcon} alt="cart" className="w-8 h-8" />
                                {cartProductList.length > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartProductList ? cartProductList.length : 0}
                                    </div>
                                )}
                            </Link>
                            <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Log In
                            </Link>
                            <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
