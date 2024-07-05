import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Button from '../components/elements/Button'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/elements/Input'
import { app } from '../firebase-config.js';

function SignUp() {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        createUserWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
            })
            .then(() => {

                fetch('http://127.0.0.1:8080/api/create-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: data.email,
                        name: data.name,
                        _id: uid
                    })
                }).then((response) => {
                    if (response.status === 200) {
                        setLoading(false);
                        toast.success('Account created successfully!🎉', {
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
                    } else {
                        console.log("error hai: ", response.json());
                    }
                }).catch((error) => {
                    setLoading(false);
                    console.log("catch me error: ", error)
                })

            })
            .catch((error) => {
                console.log("createUserWithEmailAndPassword: -> ", error);
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already In Use')
                }
            })
    }
    return (
        <div className="h-screen bg-yellow-50 flex items-center justify-center">
            <div className="relative rounded-lg max-w-md w-full flex flex-col items-center justify-center">
                <div className="absolute inset-0 transition duration-500 blur-lg bg-gradient-to-br from-yellow-300 to-red-300"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-white shadow-lg">
                    <p className="mt-2 text-center text-base text-black/60">
                        Already have an account?&nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Name"
                            labelClassname="block text-lg font-medium text-gray-700"
                            className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                            {...register('name', { required: true })}
                        />
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
                        <Button size="large" className='bg-yellow-500 w-1/2 float-end'>{loading ? 'Loading...' : 'Register'}</Button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default SignUp
