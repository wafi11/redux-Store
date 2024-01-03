/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  filterByCategories,
  sortingProducts,
  selectSortType,
  selectFilteredCategories,
  searchProduct,
} from "./ProductSlice";
import { useState } from "react";
import Search from "./Search";

const Sidebar = ({ handleSidebar }) => {
  const categories = useSelector(selectCategories);
  const filteredCategories = useSelector(selectFilteredCategories);
  const sortedType = useSelector(selectSortType);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleFilterByCategory = (category) => {
    dispatch(filterByCategories(category));
  };

  const handleSortingProducts = (request) => {
    dispatch(sortingProducts(request));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(searchProduct(keyword));
  };

  return (
    <div className="flex flex-col w-screen lg:w-[270px] h-fit mt-10 border-2 border-gray-200 bg-white rounded-md">
      <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-t-md">
        <h2 className="font-extrabold text-2xl tracking-wide">Filter</h2>
      </div>
      <Search />
      <hr className="h-[1.2px] bg-gray-300 my-3" />
      {/* category */}
      <div className="px-4 py-2 flex flex-col gap-2">
        <span className="font-medium text-lg">Categories</span>
        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          {categories.map((category) => (
            <li
              key={category}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id={category}
                  type="checkbox"
                  checked={filteredCategories.includes(category)}
                  onChange={() => handleFilterByCategory(category)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                />
                <label
                  htmlFor={category}
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 capitalize">
                  {category}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-[1.2px] bg-gray-300 my-3" />
      {/* sort */}
      <div className="px-4 py-2 flex flex-col gap-2 mb-7">
        <label htmlFor="sort" className="font-medium text-lg">
          Sort
        </label>
        <select
          id="sort"
          value={sortedType}
          onChange={(e) => handleSortingProducts(e.target.value)}
          className="bg-white border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2">
          <option value="">Random</option>
          <option value="ASCENDING">A-Z Selections</option>
          <option value="DISCENDING">Z-A Selections</option>
          <option value="HIGHEST">Highest Priced</option>
          <option value="LOWEST">Lowest Priced</option>
          <option value="TOPRATED">Top Rated</option>
          <option value="MOSTREVIEWS">Most Reviews</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
