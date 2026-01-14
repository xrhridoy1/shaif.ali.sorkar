'use client';
import Image from 'next/image';
import React from 'react';
import profileImage from '@/public/check.png'
import MainButton from '../Shared/MainButton';
import { motion } from 'framer-motion';

const heroText = [
    { name: 'Experience', value: "5 Years" },
    { name: 'Project Completed', value: '195+' },
    { name: 'Happy Client', value: '30' },
]

const heroRightVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};
const heroItem = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0
    },
};

const HeroSection = () => {
    return (
        <main className='px-4 sm:px-6 lg:px-8 relative  transition-all duration-300 ease-in mt-18 lg:mt-22 pb-5 border-b-2 border-primary'>
            <section className='max-w-7xl mx-auto transition-all duration-300 ease-in'>
                <div className='min-h-[calc(100vh-4.5rem)] lg:min-h-[calc(100vh-5.5rem)] flex flex-col gap-3 md:flex-row  md:items-center '>
                    {/* image section  */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className='relative flex-1 w-full overflow-hidden select-none'>
                        {/* main image  */}
                        <Image
                            src={profileImage}
                            alt='Shaif A. Sarkar'
                            className='object-contain'
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder='blur'
                        />
                    </motion.div>



                    {/* text section  */}

                    <motion.div
                        variants={heroRightVariants}
                        initial="initial"
                        animate="animate"
                        className="relative flex-1 w-full flex flex-col space-y-3 z-20"
                    >
                        <motion.h1 variants={heroItem} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug text-gray-700">
                            Hello, I&apos;m <br /> Shaif Ali Sarkar
                        </motion.h1>

                        <motion.p variants={heroItem} className="text-base lg:text-lg text-gray-600">
                            Creative and experienced Graphic Designer with a strong passion for visual storytelling and brand identity design.
                        </motion.p>

                        <motion.div variants={heroItem}>
                            <MainButton text="See More" />
                        </motion.div>

                        <motion.section variants={heroItem} className="flex gap-1 overflow-hidden rounded mt-4 text-center">
                            {heroText.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={heroItem}
                                    className="bg-secondary w-full flex flex-col items-center p-3 md:py-3 md:px-1 lg:p-6 gap-2"
                                >
                                    <p className="text-2xl font-semibold text-[#424E60]">{item.value}</p>
                                    <small className="text-gray-500">{item.name}</small>
                                </motion.div>
                            ))}
                        </motion.section>
                    </motion.div>


                </div>
            </section>
        </main >
    );
};

export default HeroSection;