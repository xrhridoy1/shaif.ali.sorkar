import React from 'react';
import shaifImage from '@/public/shaif-image/picture.png';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='relative px-4 sm:px-6 lg:px-8 '>
            <div className='inset-0 z-1 absolute bottom-0 left-0 w-full bg-linear-to-t from-background via-transparent to-transparent' />
            <section className='max-w-7xl mx-auto '>
                <main className='min-h-[calc(100vh-3.75rem)] lg:min-h-[calc(100vh-5rem)] mt-15 lg:mt-20 flex flex-col md:flex-row transition-all duration-200 ease-in'>
                    {/* image section */}
                    <div className='flex-1 w-full relative p-10 '>
                        <div className='inset-0 z-1 md:hidden absolute bottom-0 left-0 w-full bg-linear-to-t from-background via-transparent to-transparent' />
                        <Image
                            src={shaifImage}
                            alt='shaif-ali-image'
                            className='object-contain'
                            fill
                        />
                    </div>
                    {/* text section */}
                    <div className=' flex-1 z-10 w-full flex flex-col space-y-2 justify-center transition-all duration-300 ease-in'>
                        <h1 className='text-4xl lg:text-5xl xl:text-6xl font-semibold transition-all duration-300 ease-in'>Hi! I&apos;m</h1>
                        <h1 className='text-4xl lg:text-5xl xl:text-6xl font-semibold text-red-500 transition-all duration-300 ease-in'>Shaif A. Sarkar</h1>
                        <p className='p-1 bg-gray-400/10 dark:bg-gray-300/10 dark:border-gray-200/10 backdrop-blur-2xl rounded-full px-3 border border-gray-500/10 w-fit  lg:text-xl font-semibold transition-all duration-300 ease-in'>Social Media & UI/UX Designer</p>
                        <p className='lg:text-lg'>Creative and experienced Graphic Designer with a strong passion for visual storytelling and brand identity design. Skilled in creating eye-catching designs for social media and print media.</p>
                        <div>
                            <button className='px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-400 cursor-pointer transition-all duration-300 ease-in'>See More</button>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default HeroSection;