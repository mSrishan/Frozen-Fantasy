import React from 'react'
import BannerImg from '../../assets/websites/banner.jpg';
import AppStore from '../../assets/websites/appstore.png';
import GooglePlay from '../../assets/websites/googleplay.png';
import {motion} from 'framer-motion';

const BannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    }

const AppBanner = () => {
  return (
      <div className='container my-20'>
          <div style={BannerStyle} className='sm:min-h-[550px] sm:flex sm:justify-end sm:items-center rounded-xl space-y-14'>
              <div className='mr-12 mt-14 '>
                  <div className='space-y-6 max-w-xl mx-auto'>
                      <h1 className='text-2xl text-center sm:text-4xl font-semibold mr-12 mt-10'>Download Our App.</h1>
                      <p className='text-center sm:px-20 mr-12 '>Download our app for seamless access, convenience, and user-friendly features on iOS and Android.</p>
                  </div>
                  <div className='flex h-25 space-y-5 justify-center'>
                      <motion.img
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 0.5, }}
                          src={AppStore} alt='appstore' className='w-40 mx-4 cursor-pointer' />
                      <motion.img
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness:100, damping:10, delay: 0.5, }}
                          src={GooglePlay} alt='googleplay' className='w-40 mx-4 cursor-pointer' />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AppBanner