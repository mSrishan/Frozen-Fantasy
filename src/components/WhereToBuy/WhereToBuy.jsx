import React from 'react'
import WorldMap from '../../assets/world-map.png';
import {motion} from 'framer-motion';

const WhereToBuy = () => {
  return (
    <div className='container my-36'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-content-center'>
              {/* Form section */}
              <div className='space-y-8'>
                  <motion.h1
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 0.2 }}
                      className='text-4xl font-bold text-emerald-500 font-serif'>Buy our products from anyhere</motion.h1>
                  <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 0.4 }}
                      className='flex items-center gap-4'>
                      <input type='text' placeholder='Name' className='input-style w-full lg:w-[225px]' />
                      <input type='email' placeholder='Email' className='input-style w-full lg:w-[225px]' />
                  </motion.div>
                  <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10,  delay: 0.6 }}
                      className='flex items-center gap-4'>
                      <input type='text' placeholder='Country' className='input-style w-full lg:w-[280px]' />
                      <input type='text' placeholder='Zip Code' className='input-style w-full lg:w-[190px]' />
                  </motion.div>
                  <motion.button
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 0.8 }}
                      className='primary-btn w-full'>
                      Order Now
                  </motion.button>
              </div>
              {/* Map section */}
              <div className='col-span-2'>
                  <motion.img
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 1, }}
                      src={WorldMap} alt='world-map' className='w-full sm:w-[500px] mx-auto' />
              </div>
              
      </div>
    </div>
  )
}

export default WhereToBuy
