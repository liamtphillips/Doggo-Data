import { Link as Link1 } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const [dogs, setDogs] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(24);

  const fetchDogs = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
      });
  };

  useEffect(() => {
    if (firstSearchResultRef.current) {
      window.scrollTo({
        top: firstSearchResultRef.current.offsetTop - 400,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  useEffect(() => {
    fetchDogs();
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(query.toLowerCase())
  );
  const currentDogs = filteredDogs.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(filteredDogs.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setCurrentPage(1); // reset current page to 1 when search is performed
  };

  const firstSearchResultRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {dogs.length !== 0 ? (
        <section id="Search" className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={containerVariants}
          >
            <h1 className="mb-20 mt-20 text-white font-signature text-5xl lg:text-7xl lg:mt-10">
              Search The Doggos
            </h1>
            <form className="max-w-xl mx-auto px-2" autoComplete="off">
              <motion.input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className="py-2 px-4 rounded shadow w-full bg-slate-200 text-black placeholder-slate-400"
                value={query}
                onChange={handleSearch}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                variants={containerVariants}
              />
            </form>
          </motion.div>
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20 p-4 overflow-hidden" ref={firstSearchResultRef}
          >
            {currentDogs.map((item) => (
             <motion.div
             key={item.id}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.8, delay: 0.2 }}
             variants={containerVariants}
           >
            <Link1
  to={`/${item.name}`}
  className="place-self-center lg:place-self-stretch text-white shadow-md max-w-sm hover:bg-orange-600 h-96 overflow-hidden"
>
  <article className="bg-dog1 h-full">
    <div className="h-full flex flex-col justify-between">
      <div>
        <img
          src={item.image.url}
          alt={item.name}
          loading="lazy"
          className="md:h-72 w-full object-cover"
        />
        <h3 className="p-5 font-bold text-2xl tracking-tight">
          {item.name}
        </h3>
        <p className="p-5 font-bold">
          Bred For: <span className="font-normal">{item.bred_for}</span>
        </p>
      </div>
      <p className="p-5 mb-5 font-bold">
        Temperament: <span className="font-normal">{item.temperament}</span>
      </p>
    </div>
  </article>
</Link1>

              </motion.div>
            ))}
          </div>
          <div className="mx-auto justify-center px-4 ">
            <div className="flex justify-center mb-10">
              <button
                className="py-2 px-2 leading-tight text-white bg-dog1 rounded-l-lg hover:bg-orange-600"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                Prev
              </button>
              <div className="flex ">
                {pageNumbers.map((pageNumber) => (
                  <div
                    key={pageNumber}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                    }}
                    className={
                      pageNumber === currentPage
                        ? "p-2 px-3 text-white bg-orange-600 hover:bg-orange-600 cursor-pointer"
                        : "p-2 px-3 text-white bg-dog1 hover:bg-orange-600 cursor-pointer"
                    }
                  >
                    {pageNumber}
                  </div>
                ))}
              </div>
              <button
                className="py-2 px-4 leading-tight text-white bg-dog1  rounded-r-lg hover:bg-orange-600"
                onClick={() => {
                  if (currentPage < pageNumbers.length) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      ) : (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      )}
    </>
  );
}

export default App;
