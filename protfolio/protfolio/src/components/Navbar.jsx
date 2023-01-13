import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-screen  h-[80px]'>
            <div className='px-2  items-center w-full h-full'>
                <div className='flex justify-around items-center'>
                    <h1 className='text-xl font-bold mr-4 hidden md:flex sm:text-2xl'>M Designs</h1>
                    <ul className='hidden mr-20 md:flex'>
                        <li> Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                    <div className='hidden md:flex pr-4'>
                        <button className='px-4 py-2'> Let's Talk</button>

                    </div>
                </div>

                <div className='md:hidden flex justify-between' onClick={handleClick} >
                    <h1 className='text-xl font-bold ml-8 mt-8 sm:text-2xl'>M Designs</h1>
                    {!nav ? <MenuIcon className='w-5 mr-8 mt-8' /> : <XIcon className='w-5 hover:animate-pulse mr-8 mt-8' />}


                </div>

            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zing-200 w-full px-8'}>
                <li className=' border-b-2 '> Home</li>
                <li className=' border-b-2 '>About us</li>
                <li className=' border-b-2 '>Services</li>
                <li className=' border-b-2 '>Contact</li>
                <div className='mt-4 flex flex-col pr-4'>
                    <button className='px-4 py-2'> Let's Talk</button>

                </div>

            </ul>

            <section>
                <div className='container mx-auto'>
                    <div className=''>
                        <h1>
                        Professional UI/UX Designer & Web Developer
                        </h1>
                        <button className='px-4 py-2'> Let's Talk</button>
                    </div>
                    <div>
                        <img src="../assets/iconn.png" alt="" srcset="" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Navbar
