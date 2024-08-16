import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {motion} from 'framer-motion';

const Navbar = ({Sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-40 '>
          <div className='container'>
              <div className='flex justify-between items-center'>
                  {/* logo section */}
          <motion.h1
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
            className='text-2xl font-semibold uppercase'><span className="text-slate-900  " >Frozen </span>Fantasy.</motion.h1>
          {/* menu section */}
          <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
            onClick={()=>setSidebar(!Sidebar)}
          >
            <GiHamburgerMenu className='text-slate-900 text-3xl  cursor-pointer'/>
            </motion.div>
              </div>
          </div>
    </nav>
  )
}

export default Navbar
