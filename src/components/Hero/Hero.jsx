import React from 'react';
import backgroundImage from '../../assets/bg-slate.png';
import iceCorn from '../../assets/ice-corn.png';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';

const bgStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [Sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgStyles}>
      <section className='relative min-h-[750px] w-full'>
        <div className='container'>
          {/* Navbar section */}
          <Navbar Sidebar = {Sidebar} setSidebar ={setSidebar} />
          {/* Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[1000px]'>
            {/* Text  content section */}
            <div className='text-white '>
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1 }}
                className='text-8xl font-bold leading-tight ml-14 '>Melted <br /> Bliss</motion.h1>
              <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
                className='relative text-white mt-[100px] md:mt-20 p-4 space-y-4'>
                <div

                  className='relative z-10 space-y-4'>
                  <h1 className='text-4xl'>
                     The Indulgent World of Chocolate Ice Creams
                  </h1>
                  <h1 className='text-sm opacity-65 leading-loose'> Whether enjoyed in a cone, a sundae, or as part of a more elaborate dessert, chocolate ice cream never fails to evoke joy and satisfaction. Its versatility allows for endless variations, from dark chocolate richness to delightful swirls of fudge, making it a quintessential choice for anyone seeking a truly decadent delight.
                  </h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[330px] h-[230px] bg-blue-100/25'>

                </div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className='relative'>
              <motion.img
                  initial={{ scale:0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
                src={iceCorn} alt='ice-cream' className='relative z-40 h-[700px] w-[405px] md-h-[700px] img-shadow ' />
            </div>
            
             <div className='text-white '>
              <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
                className='relative text-white mt-[100px] md:mt-20 p-4 space-y-4'>
                <div
                  className='relative z-10 space-y-4 ml-20'>
                  <h1 className='text-4xl'>
                     The Timeless Charm of Vanilla Ice Cream
                  </h1>
                  <h1 className='text-sm opacity-65 leading-loose'>Vanilla ice cream, with its classic and comforting flavor, is a staple in the world of desserts. Whether served simply in a cone or paired with warm pie, its creamy texture and subtle sweetness offer a perfect canvas for a variety of toppings and combinations. 
                  </h1>
                </div>
                <div className='absolute -top-6 -right-8 w-[330px] h-[230px] bg-blue-100/25 '>

                </div>
              </motion.div>
            </div>
            {/* Third div section */}
            <div></div>
          </div>
        </div>
        {/* Sidebar Menu section */}
        {
          Sidebar &&
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10'>
          <div className='w-full h-full flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-6 text-white'>
            <div className='w-[1px] h-[70px] bg-white'>
            </div>
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
              <FaFacebookF className='text-2xl' />
            </div>
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
               <FaTwitter className='text-2xl' />
            </div>
            <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
              <FaInstagram className='text-2xl' />
           </div>
            
            <div className='w-[1px] h-[70px] bg-white'>

            </div>
            </div>
            </div>
        </motion.div>
        }

      </section>
    </main>
  );
}

export default Hero;
