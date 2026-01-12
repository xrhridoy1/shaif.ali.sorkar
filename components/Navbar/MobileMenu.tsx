'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import Link from 'next/link';
import { navLink } from './Navbar';
import { motion } from 'framer-motion';


const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)

    const handleOnClick = () => {
        setOpen(false)
    }

    const navTopVariant = {
        close: {
            x: '100vw'
        },
        open: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            },
        }
    }
    const linkVariant = {
        close: {
            opacity: 0,
        },
        open: {
            opacity: 1,
        }
    }

    return (
        <div>
            {/* hamburger menu  */}
            <div className={`relative z-10 ${isOpen ? 'text-white' : 'text-primary'}`}>
                <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
            </div>
            {/* link  */}
            {isOpen && (
                <motion.div
                    variants={navTopVariant}
                    initial="close"
                    animate="open"
                    className='absolute left-0 top-0 bg-primary w-full h-screen '>
                    <ul className='flex flex-col justify-center items-center h-full w-full space-y-3'>
                        {navLink.map((link, key) => (
                            <motion.li
                                variants={linkVariant}
                                key={key}
                                className="block w-full text-center capitalize group text-white transition-all duration-200 text-3xl  hover:text-white/80 font-semibold"
                                onClick={handleOnClick}
                            >
                                <Link href={link.link}>
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;