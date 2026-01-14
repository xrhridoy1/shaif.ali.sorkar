'use client'
import React from 'react';
import ContentHeader from './Shared/ContentHeader';
import image1 from '@/public/grow/image1.png'
import image2 from '@/public/grow/image2.png'
import image3 from '@/public/grow/image3.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
const array = [
    { title: 'Digital Design', describe: "From research to high-fidelity UI: clear flows, accessible patterns, iterative improvement loops.", image: image1 },

    { title: 'Design Consultancy', describe: "Brainstorm ideas, explore directions, evaluate options, recommend clear solutions for measurable impact.", image: image2 },

    { title: 'Design Systems', describe: "Scalable design systems: tokens and components that unify experiences and accelerate delivery.", image: image3 },
]


// animation code 
const headerVariants = {
    off: { opacity: 0, y: 100 },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
        }
    }
} as const;

const parentVariants = {
    off: { opacity: 0, y: 40 },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            // হেডার অ্যানিমেশন ০.৬ সেকেন্ড চলবে, তাই প্যারেন্টকে একটু পর শুরু করছি
            delayChildren: 0.6,
            staggerChildren: 0.4,
            duration: 0.5
        }
    }
};

const childVariants = {
    off: { opacity: 0, y: 50 },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5
        }
    }
} as const;
// animaiton code end

const GrowUp = () => {
    return (
        <main className='px-4 sm:px-6 lg:px-8 relative  transition-all duration-300 ease-in mt-18 lg:mt-22 pb-10 border-b-2 border-primary'>
            <section className='max-w-7xl mx-auto transition-all duration-300 ease-in'>
                <div className=''>
                    {/* top text section  */}
                    <motion.div
                        variants={headerVariants}
                        initial="off"
                        whileInView="view"
                    >
                        <ContentHeader text1="How I can help" text2='you grow' />
                    </motion.div>
                    {/* documantation section */}
                    <motion.article
                        variants={parentVariants}
                        initial="off"
                        whileInView="view"
                        className='flex flex-col md:flex-row flex-wrap gap-3 pt-15 md:pt-18 lg:pt-20'>

                        {array.map((item, key) => (
                            <motion.div
                                variants={childVariants}
                                whileHover={{ scale: 1.03 }}
                                key={key} className='flex flex-1 flex-col items-center bg-secondary rounded-[3rem] py-8 px-15 lg:p-10  '>
                                <div className='relative h-50 w-50 md:h-80 md:w-80'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className='object-contain'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div>
                                    <strong>{item.title}</strong>
                                    <p>{item.describe}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.article>
                </div>
            </section>
        </main>
    );
};

export default GrowUp;