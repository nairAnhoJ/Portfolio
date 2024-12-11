import React, { useEffect, useState } from 'react'

function NavBar() {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        console.log(scrollY);

        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }), [];


  return (
    <div className={`w-full px-80 z-[99] sticky top-0 transition-all duration-500 ${(isScrolled) ? 'h-20 px-72 bg-neutral-800' : 'h-32 px-80' }`}>
        <div className='w-full h-full flex items-center justify-between text-white'>
            <div className='font-bold text-3xl'>
                John Arian
            </div>
            <div className='flex items-center gap-x-8 font-semibold'>
                <a href="" className='hover:text-teal-300 transition-all duration-300'>Home</a>
                <a href="" className='hover:text-teal-300 transition-all duration-300'>About</a>
                <a href="" className='hover:text-teal-300 transition-all duration-300'>Projects</a>
                <a href="" className='hover:text-teal-300 transition-all duration-300'>Contact</a>
                <a href="" className='px-8 pt-[7px] pb-[8px] border rounded-lg border-teal-300 hover:bg-teal-300 hover:text-gray-700 transition-all duration-500'>
                    <p className=''>Download</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar