import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-1 lg:space-y-3'>
            <p className='text-3xl lg:text-5xl font-bold'>4O4</p>
            <p className='text-lg font-semibold capitalize'>Try another and go to home page</p>
            <Link href={'/'} className='block py-1.5 font-semibold font-mono text-xl w-fit border-2 border-red-500 px-4 '>
                Home
            </Link>
        </div>
    );
};

export default NotFound;