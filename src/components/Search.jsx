import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoSearchCircleSharp } from "react-icons/io5";
import ProductSlice, { searchProduct } from "./ProductSlice";
import { Link } from "react-router-dom";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleInputSearch = (e) => {
    console.log("before dispatch");
    dispatch(searchProduct(keyword));
    console.log(searchProduct(keyword));
    console.log("after dispatch");
  };

  return (
    <div className="relative w-[30%]">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search ...."
        className="rounded-full p-2 px-4 w-full focus:outline-none"
      />
      <button
        className="absolute top-1 end-1 right-1 text-green-700 rounded-full "
        type="submit"
        onClick={() => handleInputSearch(products)}>
        <IoSearchCircleSharp size={32} />
      </button>
    </div>
  );
};

export default Search;
