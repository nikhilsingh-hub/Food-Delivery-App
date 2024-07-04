import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul className="text-gray-300">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul className="text-gray-300">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2022 food-e. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
