import React from 'react';
import logo from '../../public/assets/logo.png'
import Image from 'next/image';
import { format} from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>

            <Image src={logo} alt='logo' width={300} height={200} className='mx-auto'/>      
            <p>Journalism without fear or favour</p>  
            <p>{format(new Date(), "EEEE MMM dd,yyyy")}</p>
            
        </div>
    );
};

export default Header;