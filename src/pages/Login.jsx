import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Button from "../components/elements/Button";
import Input from '../components/elements/Input';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'
import {login, logout} from "../store/slices/authSlice"

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                setLoading(false);
                dispatch(login());
                toast.success('Successful Login!🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                    });
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('Email not found, please registe')
                }
                setLoading(false);
            })
    
    }
    return (
        <div className="h-screen bg-yellow-50 flex items-center justify-center">
        <div className="relative rounded-lg max-w-md w-full flex flex-col items-center justify-center">
            <div className="absolute inset-0 transition duration-500 blur-lg bg-gradient-to-br from-yellow-300 to-red-300"></div>
            <div className="p-10 rounded-xl z-10 w-full h-full bg-white shadow-lg">
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
        </p>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email"
                        labelClassname="block text-lg font-medium text-gray-700"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    'Email address must be a valid address',
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        labelClassname="block text-lg font-medium text-gray-700"
                        type = "password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        {...register('password', { required: true })}
                    />
                    <Button size="large" className='bg-yellow-500 w-1/2 float-end'>{loading ? 'Loading...' : 'Login'}</Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    </div>
    )
}

export default Login
