import React from 'react'
import { motion } from 'framer-motion';
import Ice1 from '../../assets/Ice/Ice1.png';
import Ice2 from '../../assets/Ice/Ice2.png';
import Ice3 from '../../assets/Ice/Ice3.png';

const servicesData = [{
    id: 1,
    Image: Ice1,
    title: 'Waffle Glass Of Sorbet With Wild Berries Ice Cream',
    description: 'A refreshing combination of sorbet and wild berries ice cream served in a crispy waffle glass.'
},
{
    id: 2,
    Image: Ice2,
    title: 'Ice cream with Chocolate chips and Syrup',
    description: 'A delightful combination of rich chocolate chips and sweet syrup, creating a perfect treat for chocolate lovers.'
},
{
    id: 3,
    Image: Ice3,
    title: 'Faluda Ice Cream',
    description: 'A delicious ice cream with a traditional Italian twist, featuring a blend of flavors and textures.'
}];

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
          {/* Header section */}
          <div className='text-center max-w-lg mx-auto space-y-2 '>
              <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
                  className='text-3xl font-bold'>
                  <span className='text-yellow-950'>Fresh and Tasty </span><span className='text-primary text-4xl'>
                       Ice Cream
                  </span>
              </motion.h1>
              <motion.p
                  initial={{ scale:0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
                  className='text-sm opacity-50'>
                  Our ice creams are crafted to turn your wildest flavor dreams into a frosty reality. One taste, and you're off on a sweet, fantastical adventure!
              </motion.p>
          </div>
          {/* Card section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {servicesData.map((service) => (
                  <div className='text-center p-4 space-y-6' >
                      <img src={service.Image} alt='ice-cream' className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
                      <div className='space-y-2'>
                          <h1 className='text-2xl font-bold text-yellow-950'>{service.title}</h1>
                          <p className='text-sm text-neutral-500'>{service.description}</p>
                       </div>   
                   </div>
             ))}
          </div>
    </div>
  )
}

export default Services
