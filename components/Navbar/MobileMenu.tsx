'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import Link from 'next/link';
import { navLink } from './Navbar';
import { motion } from 'motion/react';

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
                staggerChildren: 0.1
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
            <div className='relative z-10'>
                <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
            </div>
            {/* link  */}
            {isOpen && (
                <motion.div
                    variants={navTopVariant}
                    initial="close"
                    animate="open"
                    className='absolute left-0 top-0 bg-red-50 dark:bg-neutral-900 w-full h-screen '>
                    <ul className='flex flex-col justify-center items-center h-full w-full space-y-3'>
                        {navLink.map((link, key) => (
                            <motion.li
                                variants={linkVariant}
                                key={key}
                                className="block w-full text-center capitalize group text-neutral-600 hover:text-neutral-900 transition-all duration-200 text-3xl dark:hover:text-neutral-200 dark:text-neutral-400 font-semibold"
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