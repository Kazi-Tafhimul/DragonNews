
import Link from 'next/link';
import React from 'react';
import userAvatar from '../../public/assets/user.png';
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-6'>
            <div></div>
           <ul className='flex justify-between items-center gap-3 text-gray-700'>
            <li>
                <Navlink href={'/'}>Home</Navlink>
            </li>
            <li>
                <Navlink href={'/about-us'}>About</Navlink>
            </li>
            <li>
                <Navlink href={'/career'}>Career</Navlink>
            </li>
           </ul>
           <div className='flex items-center gap-2'>
           <Image src={userAvatar} alt='user avatar' width={60} height={60}/>
           <button className='btn btn-primary'>
            <Link href={'/login'} className='text-white'>Login</Link>
           </button>

           </div>
        </div>
    );
};

export default Navbar;