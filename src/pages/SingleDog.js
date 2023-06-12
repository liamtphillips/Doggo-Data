import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SingleDog() {
  const [dog, setDog] = useState([]);
  const { name } = useParams();
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
        const data = await res.json();
        const filteredData = data.filter(
          (item) => item.name.toLowerCase() === name.toLowerCase()
        );
        setDog(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleDogData();
  }, [name]);

  return (
    <motion.section
      id={Link}
      className="bg-dog2 lg:relative absolute max-w-5xl mx-auto flex items-center justify-center h-screen z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      variants={containerVariants}
    >
      {dog.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
        >
          <article>
            <img
              src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
              alt={item.name}
            />
          </article>
          <article>
            <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
              {item.name}
            </h1>
            {item.description && (
              <p className="text-white mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
                {item.description}
              </p>
            )}
            <ul className="text-sm text-white leading-loose lg:text-base lg:leading-relaxed">
              <li>
                <span className="font-bold text-white">Bred for:</span>{' '}
                {item.bred_for}
              </li>
              <li>
                <span className="font-bold text-white">Height:</span>{' '}
                {item.height.metric} cm
              </li>
              <li>
                <span className="font-bold text-white">Weight:</span>{' '}
                {item.weight.metric} kgs
              </li>
              <li>
                <span className="font-bold text-white">Breed Group:</span>{' '}
                {item.breed_group}
              </li>
              <li>
                <span className="font-bold text-white">Lifespan:</span>{' '}
                {item.lifespan}
              </li>
              <li>
                <span className="font-bold text-white">Temperament:</span>{' '}
                {item.temperament}
              </li>
            </ul>
            <Link
              to="/search"
              className="inline-block bg-dog1  py-2 px-6 rounded mt-8 text-white hover:bg-orange-600 transition-all duration-200"
            >
              &larr; Back
            </Link>
          </article>
        </div>
      ))}
    </motion.section>
  );
}
