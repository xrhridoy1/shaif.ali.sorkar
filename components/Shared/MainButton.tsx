'use client'
import React from 'react';
import { motion } from 'framer-motion';

const MainButton = ({ text }: { text: string }) => {
    return (
        <motion.button
            whileHover={{}}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.1, ease:"easeInOut" }}

            className='px-6 border-2 border-transparent hover:border-primary hover:bg-primary/10 hover:text-primary py-2 bg-primary rounded text-white cursor-pointer  transition-all duration-100 ease-in'

        >{text}</motion.button>
    );
};

export default MainButton;