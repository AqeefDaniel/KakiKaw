import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const toggleProfileMenu = () => setProfileMenuVisible((prev) => !prev);

  const {setShowSearch, getCartCount, user, logout} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-6 px-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <Link to="/" className="transform hover:scale-105 transition-transform duration-200"><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex sm:gap-6 md:gap-10 lg:gap-14 text-sm text-gray-700 font-medium">
        <NavLink to="/" className="flex flex-col items-center hover:text-gray-900 transition-all duration-200 group">
          <p className="font-semibold">HOME</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center hover:text-gray-900 transition-all duration-200 group">
          <p className="font-semibold">COLLECTION</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center hover:text-gray-900 transition-all duration-200 group">
          <p className="font-semibold">ABOUT</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center hover:text-gray-900 transition-all duration-200 group">
          <p className="font-semibold">CONTACT</p>
          <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-900 to-gray-600 transition-all duration-300" />
        </NavLink>
      </ul>

      {/* Search and Menu */}
      <div className="flex items-center gap-5">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-6 cursor-pointer hover:scale-110 transition-transform duration-200" alt="Search Icon" />

        <div
          className="relative"
          onMouseEnter={() => setProfileMenuVisible(true)}
          onMouseLeave={() => setProfileMenuVisible(false)}
          onTouchStart={toggleProfileMenu}
        >
          {user ? (
            <img
              src={assets.profile_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-transform duration-200"
              alt="Profile Icon"
            />
          ) : (
            <Link to='/login'>
              <img
                src={assets.profile_icon}
                className="w-6 cursor-pointer hover:scale-110 transition-transform duration-200"
                alt="Profile Icon"
              />
            </Link>
          )}
          {profileMenuVisible && user && (
            <div className="absolute right-0 top-8 flex flex-col bg-white rounded-xl shadow-2xl p-4 gap-2 w-48 border border-gray-100">
              <p className="text-xs text-gray-400 border-b pb-2 truncate">{user.email}</p>
              <Link to="/orders" className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-all duration-200">📦 Orders</Link>
              <p onClick={logout} className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-all duration-200">🚪 Logout</p>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative group">
          <img src={assets.cart_icon} className="w-6 cursor-pointer group-hover:scale-110 transition-transform duration-200" alt="Cart Icon" />
          {getCartCount() > 0 && <p className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg animate-pulse">{getCartCount()}</p>}
        </Link>

        {/* Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden hover:opacity-60"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-80 z-10`}>
        <div className="flex flex-col mt-5">
          <div onClick={() => setVisible(false)} className="flex items-center gap-2 cursor-pointer">
            <img className="w-4 mb-5 ml-4 transform transition-transform hover:rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
            <p className="text-gray-600 mb-5 hover:text-black">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-t border-gray-200 text-gray-600 hover:text-black" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 px-5 border-b border-gray-200 text-gray-600 hover:text-black" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar
