import React from 'react';
import { motion } from 'framer-motion';
import doggy from './doggy.jpg';
import { FaHandsHelping, FaSketch } from 'react-icons/fa';
import { GiDogHouse } from 'react-icons/gi';

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="container px-6 mx-auto lg:mt-20 mt-10">
      <motion.section
        id="Landing"
        className="text-gray-800 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        variants={containerVariants}
      >
        <div className="block rounded-lg shadow-lg bg-dog3">
          <div className="flex flex-wrap items-center">
            <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src={doggy}
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-4 text-black display-5 py-4">The world's <span className="text-orange-600">number one</span> dog research website.</h2>
                <p className="text-gray-500 mb-12 pb-4">
                  Search for any dog breed for more information about that specific type of dog, or simply scroll and search all dogs.
                  Search for any dog breed for more information about that specific type of dog, or simply scroll and search all dogs.
                </p>

                <div className="grid lg:gap-x-12 md:grid-cols-3">
                  <div className="mb-12 md:mb-0">
                    <div className="flex justify-center lg: flex-none lg:justify-between">
                      <h3 className="text-4xl font-bold lg:d text-orange-600 mb-5  "><GiDogHouse /></h3>
                    </div>
                    <h2 className="text-3xl font-bold text-orange-600 mb-4">172</h2>
                    <h5 className="text-lg font-medium text-orange-600 mb-0">Dog Breeds</h5>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex justify-center lg: flex-none lg:justify-between">
                      <h3 className="text-4xl font-bold lg:d text-orange-600 mb-5 "><FaSketch /></h3>
                    </div>
                    <h2 className="text-3xl font-bold text-orange-600 mb-4">100%</h2>
                    <h5 className="text-lg font-medium text-orange-600 mb-0">Satisfaction</h5>
                  </div>

                  <div className="px-4">
                    <div className="flex justify-center lg: flex-none lg:justify-between">
                      <h3 className="text-4xl font-bold lg:d text-orange-600 mb-4 "><FaHandsHelping /></h3>
                    </div>
                    <h2 className="text-3xl font-bold text-orange-600 mb-4">49</h2>
                    <h5 className="text-lg font-medium text-orange-600 mb-0">Contributors</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
