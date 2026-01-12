import Image from 'next/image';
import React from 'react';
import profileImage from '@/public/check.png'

const heroText = [
    { name: 'Experience', value: "5 Years" },
    { name: 'Project Completed', value: '195+' },
    { name: 'Happy Client', value: '30' },
]

const HeroSection = () => {
    return (
        <main className='px-4 sm:px-6 lg:px-8 relative  transition-all duration-300 ease-in mt-18 lg:mt-22 pb-5 border-b-2 border-primary'>
            <section className='max-w-7xl mx-auto transition-all duration-300 ease-in'>
                <div className='min-h-[calc(100vh-4.5rem)] lg:min-h-[calc(100vh-5.5rem)] flex flex-col gap-3 md:flex-row  md:items-center '>
                    {/* image section  */}
                    <div className='relative flex-1 w-full overflow-hidden select-none'>
                        {/* main image  */}

                        <Image
                            src={profileImage}
                            alt='Shaif A. Sarkar'
                            className='object-contain'
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder='blur'
                        />
                        {/* <Image
                            src={profileImage}
                            alt='Shaif A. Sarkar'
                            className='object-contain'
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder='blur'
                        /> */}
                        {/* editing section */}
                        {/* <div className='absolute bottom-0  transform translate-y-35 -translate-x-15 z-5'>
                            <Image src={'/react-ico.png'} alt='icon' width={1000} height={1000} />
                        </div> */}


                        {/* <div className='absolute w-full -bottom-15 -right-10 sm:-right-20 sm:bottom-10 md:right-10 md:-bottom-10 lg:-right-30 transform translate-x-50 z-5'>
                            <Image src={'/massegeicon.png'} alt='icon' width={400} height={400} />
                        </div> */}
                        {/* editin section end  */}

                        {/* bg section */}
                        {/* <div className=' w-50 h-50 lg:h-100 lg:w-100 bg-primary absolute -z-10  left-1/2 sm:left-18 md:left-0 lg:left-20  rounded-2xl bottom-18 ' /> */}

                        {/* <div className='inset-0 absolute bg-linear-to-t from-white via-transparent to-transparent z-3' /> */}
                    </div>



                    {/* text section  */}
                    <div className='relative flex-1 w-full flex flex-col space-y-3 z-20'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug text-gray-700'>Hello, I&apos;m <br /> Shaif Ali Sarkar</h1>
                        <p className='text-base lg:text-lg text-gray-600'>Creative and experienced Graphic Designer with a strong passion for visual storytelling and brand identity design. Skilled in creating eye-catching designs for social media and print media.</p>
                        <div>
                            <button className='px-6 py-2 bg-primary rounded text-white cursor-pointer hover:bg-primary/90 transition-all duration-100 ease-in'>See More</button>
                        </div>
                        <section className='flex gap-1 overflow-hidden rounded mt-4'>
                            {heroText.map((item, idx) => (
                                <div key={idx} className='bg-secondary w-full flex flex-col items-center p-3 md:py-3 md:px-1 lg:p-6 gap-2'>
                                    <p className='text-2xl font-semibold text-[#424E60]'>{item.value}</p>
                                    <small className='text-gray-500'>{item.name}</small>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default HeroSection;