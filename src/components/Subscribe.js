import { motion } from 'framer-motion';
import React from 'react';
import officeDogs from './officedogs.png';
import officeDogsMd from './officedogsmd.png';
import officeDogsSm from './officedogssm.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <motion.section
      id="Subscribe"
      className="z-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      variants={containerVariants}
    >
      <div className="2xl:mx-auto 2xl:container mx-4 py-20 z-0">
     
        <div className="w-full relative flex items-center justify-center lg:mt-20 z-0">
          <img src={officeDogs} alt="dog office" className="w-full h-full absolute z-0 hidden xl:block rounded-xl " />
          <img src={officeDogsMd} alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
          <img src={officeDogsSm} alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
          <div className="bg-dog3 bg-opacity-50 lg:bg-opacity-70 md:my-16 lg:py-16 py-10 w-full lg:w-[1000px] md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-0">
            <h1 className="text-4xl font-semibold leading-9 text-center">Sign up to our <span className="text-orange-600">Newsletter</span></h1>
            <p className="text-base leading-normal text-center mt-6">
              Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
              a week on every friday so subscribe to get latest news and updates.
            </p>
            <div className=" flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input className="border border-white bg-white sm:border-transparent text-base w-full font-medium leading-none p-4 focus:outline-none bg-transparent placeholder-black" placeholder="Email Address" />
              <button className="focus:outline-none focus:ring-offset-2 focus:ring border text-white border-white sm:border-transparent w-full sm:w-auto bg-orange-600 py-4 px-6 hover:bg-dog1">Subscribe</button>
            </div>
          </div>
          </div>
          </div>
          </motion.section>


          


        

    )
}

export default Footer