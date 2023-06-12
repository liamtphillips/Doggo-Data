import React, { useState } from 'react';
import { FaBars, FaTimes, FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      label: 'Home'
    },
    {
      id: 2,
      path: '/search',
      label: 'Search'
    },
    {
      id: 3,
      path: '/subscribe',
      label: 'Subscribe'
    }
  ];

  return (
    <div className="sticky z-20 top-0 flex bg-dog1 justify-between items-center w-full h-20 px-4 text-white" style={{ transition: "all 1s" }}>
      <div className="flex gap-5">
        <Link to={'/'}>
        <h1 className="text-3xl lg:text-4xl font-signature ml-2">Doggo Data</h1>
        </Link>
        <h2 className="text-3xl lg:text-4xl"><FaPaw /></h2>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, path, label }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200 font-steve text-2xl">
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-dog1 to-dog3 text-white font-steve ">
          {links.map(({ id, path, label }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
