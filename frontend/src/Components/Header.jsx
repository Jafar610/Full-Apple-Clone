import React from "react";
import logo from '../assets/img/apple-logo.svg'
import search from '../assets/img/search-button.svg'
import cart from '../assets/img/basket.svg'
function Header() {
  return (
    <>
      <nav className="flex justify-center items-center border border-gray-100 w-full bg-gray-100 py-2 shadow-xl font-poppins">
        <div className="mr-10">
          <img src={logo} alt="apple logo" className="w-10 " />
        </div>
        <ul className="flex justify-center items-center">
          <li className="mr-10">
            <a href="">Store</a>
          </li>
          <li className="mr-10">
            <a href="">Mac</a>
          </li>
          <li className="mr-10">
            <a href="">iPad</a>
          </li>
          <li className="mr-10">
            <a href="">iPhone</a>
          </li>
          <li className="mr-10">
            <a href="">AirPod</a>
          </li>
          <li className="mr-10">
            <a href="">Watch</a>
          </li>
          <li className="mr-10">
            <a href="">TV & Home</a>
          </li>
          <li className="mr-10">
            <a href="">
              <img src={search} alt="search" className="w-5"/>
            </a>
          </li>
          <li className="mr-10">
            <a href="">
              <img src={cart} alt="cart" className="w-6" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
