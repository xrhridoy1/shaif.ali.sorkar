import Image from 'next/image';
import React from 'react';
import navIcon from '@/public/shaif-image/picture.png'
import Link from 'next/link';
import { ThemeTogglerButton } from '../animate-ui/components/buttons/theme-toggler';

export const navLink = [
    { name: 'home', link: '/' },
    { name: 'work', link: '/work' },
    { name: 'contact', link: '/contact' },
    { name: 'about', link: '/about' },
]


const Navbar = () => {
    return (
        <nav className={`fixed top-0 w-full z-100 transition-all duration-300 ease-in backdrop-blur-sm border-b`} >
            <main className='px-4 sm:px-6 lg:px-8'>
                <section className='max-w-7xl mx-auto relative h-12 lg:h-15'>
                    <div className='flex justify-between items-center '>
                        {/* icon section  */}
                        <Link href={'/'} className='flex space-x-1 items-center h-12 lg:h-15 flex-1'>
                            <div className='h-10 w-10 lg:w-13 lg:h-13 relative'>
                                <Image
                                    src={navIcon}
                                    alt='Shai ali sorkar jim'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <p className='hidden md:block font-semibold dark:text-neutral-50'>Shaif A. Sarkar</p>
                        </Link>
                        {/* destok link section  */}
                        <div className='hidden flex-1 w-full md:flex justify-center '>
                            {navLink.map((link, key) => (
                                <Link
                                    key={key}
                                    href={link.link}
                                    className="relative capitalize group text-neutral-600 hover:text-neutral-900 transition-all duration-200 dark:hover:text-neutral-200 dark:text-neutral-400 w-20 text-center"
                                >
                                    {link.name}
                                    <span
                                        className="absolute left-1/2 -bottom-3 lg:-bottom-4.5 w-0 h-0.5 bg-red-500 transition-all transform -translate-x-1/2  duration-300 group-hover:w-full"
                                    ></span>
                                </Link>
                            ))}
                        </div>
                        {/* button section  */}
                        <div className='flex-1 w-full hidden md:flex justify-end gap-3 items-center'>
                            <ThemeTogglerButton variant="destructive" />
                            <button className=' px-6 py-2 rounded-full bg-red-500 text-white'>Hire me</button>
                        </div>
                    </div>
                </section>
            </main>
        </nav>
    );
};

export default Navbar;