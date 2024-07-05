import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Burger from "../../assets/images/burger.png";
import Noodles from "../../assets/images/noodles.png";
import Thali from "../../assets/images/thali.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Banner = () => {

    const images = [Burger, Noodles, Thali];

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={`bg-banner w-full h-screen mx-auto relative flex flex-col md:flex-row items-center md:justify-between p-6 mb-30`}>
            <div className='h-1/2 flex flex-col justify-center'>
                <div className={`typewriter mb-12 ${loaded ? 'slide-in-left' : ''}`} >
                    <h1 className="mb-4 text-3xl font-bold text-black">
                        Savor Every Bite <span className='text-amber-700 text-4xl'>Deliciously!</span>
                    </h1>
                </div>
                <div className={`w-full p-3 flex gap-4 mt-36 ${loaded ? 'slide-in-left' : ''}`}>
                    <ScrollLink to="about" smooth={true} duration={500} className="bg-red-600  text-white hover:text-yellow-500 font-bold p-2 rounded transition duration-300 cursor-pointer">
                        About Us!!
                    </ScrollLink>
                    <a href="/menu" className="text-white hover:text-yellow-500 font-bold text-lg bg-zinc-700 px-4 py-2 rounded">
                        See Menu
                    </a>
                </div>
            </div>
            <div className={`${loaded ? 'slide-in-right' : ''} w-1/2`}>
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={1000}
                    transitionTime={1000}
                    className="w-1/2 float-end"
                >
                    {loaded && images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`banner ${index}`} className="max-h-65 rounded-lg" />
                    </div>
                ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
