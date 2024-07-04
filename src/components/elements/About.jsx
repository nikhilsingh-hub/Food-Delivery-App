import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from "../../assets/images/about-image.png";

const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const About = () => {
    return (
        <div id="about" className='w-full bg-white mt-14'>
            <div className='p-8 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className='text-4xl font-bold mb-6 text-gray-800'>About Us</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                        beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
                        itaque error, atque, exercitationem fugit ab, modi ut voluptatum
                        sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
                        adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
                        eaque dignissimos ut, nam debitis numquam!
                    </p>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.img
                        src={aboutImage}
                        alt="About"
                        className='w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
