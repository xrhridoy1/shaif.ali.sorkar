import Image from 'next/image';
import React from 'react';
import navIcon from '@/public/profile.jpg'
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export const navLink = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
    { name: 'services', link: '/services' },
    { name: 'portfolio', link: '/portfolio' },
    { name: 'blog', link: '/blog' },
    { name: 'contact', link: '/contact' },
]


const Navbar = () => {
    return (
        <nav className={`fixed top-0 w-full z-100 transition-all duration-300 ease-in backdrop-blur-sm border-b`} >
            <main className='px-4 sm:px-6 lg:px-8 relative py-2 md:py-3 transition-all duration-300 ease-in'>
                <section className='max-w-7xl mx-auto transition-all duration-300 ease-in'>
                    <div className='flex justify-between items-center '>
                        {/* icon section  */}
                        <Link href={'/'} className='flex space-x-1 items-center  flex-1 min-w-fit'>
                            <div className='h-10 w-10 lg:w-13 lg:h-13 relative'>
                                <Image
                                    src={navIcon}
                                    alt='Shai ali sorkar jim'
                                    fill
                                    className='object-contain rounded-full overflow-hidden'
                                />
                            </div>
                            <p className='hidden md:block text-lg md:text-xl lg:text-2xl text-primary font-semibold'>Shaif A. Sarkar</p>
                        </Link>
                        {/* destok link section  */}
                        <div className='hidden w-full md:flex space-x-4 lg:space-x-6 justify-end items-center '>
                            {navLink.map((link, key) => (
                                <Link
                                    key={key}
                                    href={link.link}
                                    className="relative capitalize group transition-all duration-200 text-center font-semibold lg:px-3"
                                >
                                    {link.name}
                                    <span
                                        className="absolute left-0 -bottom-3 lg:-bottom-4.5 w-0 h-0.5 bg-primary transition-all transform duration-300 group-hover:w-full"
                                    />
                                    <span
                                        className="absolute right-0 -top-2 lg:-bottom-3 w-0 h-0.5 bg-primary transition-all transform duration-300 group-hover:w-full"
                                    />
                                </Link>
                            ))}
                            <button className='px-6 py-2 bg-primary rounded text-white cursor-pointer hover:bg-primary/90 transition-all duration-100 ease-in'>Let&apos;s Talk</button>
                        </div>
                        {/* hamburger menu button  */}
                        <div className='md:hidden'>
                            <MobileMenu />
                        </div>
                    </div>
                </section>
            </main>
        </nav>
    );
};

export default Navbar;