import React from 'react';
import Button from "./Button";
import pizzaBanner from "../../assets/images/pizza_banner.png";

export const Banner = () => {
    return (
        <div className="banner w-full px-7 mx-auto relative flex flex-col md:flex-row items-center justify-between bg-yellow-500 p-6 rounded-lg shadow-lg overflow-hidden animate-wave mt-14">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food Ordering Made Easy
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container flex space-x-4">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300" size={'medium'} variant={'secondary'}>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-lg">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={pizzaBanner} alt="banner" className="max-h-95 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" />
            </div>
        </div>
    );
};

export default Banner;
