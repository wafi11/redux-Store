import React from "react";
import Cart from "../assets/cart.svg";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const Header = ({ handleToModal }) => {
  const total = useSelector(selectCartTotalItems);

  return (
    <header className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-3xl font-bold text-gray-100">Redux Shop</h1>
          <button
            type="button"
            className="relative rounded-full bg-green-800 p-2 text-gray-100"
            onClick={handleToModal}>
            <span
              className={
                total <= 0
                  ? "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-transparent text-sm text-white flex justify-center"
                  : "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-sm text-white flex justify-center"
              }>
              {total}
            </span>
            <img src={Cart} alt="cart" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
