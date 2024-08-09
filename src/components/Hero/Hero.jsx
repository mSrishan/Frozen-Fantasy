import React from 'react';
import backgroundImage from '../../assets/bg-slate.png';
import iceCorn from '../../assets/ice-corn.png';

const bgStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgStyles}>
      <section className='min-h-[750px] w-full'>
        <div className='container'>
          {/* Navbar section */}
          {/* Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
            {/* Text  content section */}
            <div className='text-white '>
              <h1 className='text-8xl font-bold leading-tight ml-14 '>Melted <br /> Bliss</h1>
              <div className='relative text-white mt-[100px] md:mt-20 p-4 space-y-4'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-3xl'>
                     The Indulgent World of Chocolate Ice Creams
                  </h1>
                  <h1 className='text-sm opacity-65 leading-loose'> Whether enjoyed in a cone, a sundae, or as part of a more elaborate dessert, chocolate ice cream never fails to evoke joy and satisfaction. Its versatility allows for endless variations, from dark chocolate richness to delightful swirls of fudge, making it a quintessential choice for anyone seeking a truly decadent delight.
                  </h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[330px] h-[230px] bg-blue-100/25'>

                </div>
              </div>
            </div>
            {/* Hero Image section */}
            <div className='relative'>
              <img src={iceCorn} alt='ice-cream' className='relative z-40 h-[700px] w-[405px] md-h-[700px] img-shadow '   />
            </div>
            
             <div className='text-white '>
              <div className='relative text-white mt-[100px] md:mt-20 p-4 space-y-4'>
                <div className='relative z-10 space-y-4 ml-14'>
                  <h1 className='text-3xl'>
                     The Timeless Charm of Vanilla Ice Cream
                  </h1>
                  <h1 className='text-sm opacity-65 leading-loose'>Vanilla ice cream, with its classic and comforting flavor, is a staple in the world of desserts. Whether served simply in a cone or paired with warm pie, its creamy texture and subtle sweetness offer a perfect canvas for a variety of toppings and combinations. 
                  </h1>
                </div>
                <div className='absolute -top-6 -right-8 w-[330px] h-[230px] bg-blue-100/25 '>

                </div>
              </div>
            </div>
            {/* Third div section */}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
