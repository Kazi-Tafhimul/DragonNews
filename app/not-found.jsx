import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h1 className='font-bold text-5xl'>This page is not found</h1>
            
            <Link href={'/'}>
               <button className='btn mt-8 btn-primary'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;