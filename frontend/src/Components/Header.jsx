import React from "react";
import logo from '../assets/img/apple-logo.svg'
import search from '../assets/img/search-button.svg'
import cart from '../assets/img/basket.svg'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="flex justify-center items-center border border-gray-100 w-full bg-gray-100 py-2 shadow-xl font-poppins">
        <div className="mr-10">
          <img src={logo} alt="apple logo" className="w-10 " />
        </div>
        <ul className="flex justify-center items-center">
          <li className="mr-10">
            <Link to='/store'>Store</Link>
          </li>
          <li className="mr-10">
            <Link to='/mac'>Mac</Link>
          </li>
          <li className="mr-10">
            <Link to='/ipad'>iPad</Link>
          </li>
          <li className="mr-10">
            <Link to='/iphone'>iPhone</Link>
          </li>
          <li className="mr-10">
            <Link to='/airpod'>AirPod</Link>
          </li>
          <li className="mr-10">
            <Link to='/watch'>Watch</Link>
          </li>
          <li className="mr-10">
            <Link to='/tv'>TV & Home</Link>
          </li>
          <li className="mr-10">
            <Link to='/'>
              <img src={search} alt="search" className="w-5"/>
            </Link>
          </li>
          <li className="mr-10">
            <Link to='/cart'>
              <img src={cart} alt="cart" className="w-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
