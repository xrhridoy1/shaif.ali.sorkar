import React from 'react';

const ContentHeader = ({ text1, text2  }: { text1: string, text2?: string }) => {
    return (
        <header className='text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug text-gray-700'>{text1}<br />{text2}</h1>
        </header>
    );
};

export default ContentHeader;