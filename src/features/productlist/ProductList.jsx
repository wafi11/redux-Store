import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../cart/cartSlice";
import Loading from "../../components/Loading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleClickBuy = (item) => {
    dispatch(addItemsToCart(item));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-10">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full bg-white rounded-xl border items-center shadow p-4">
                <div className="group relative w-[80%] h-[200px] mx-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt="../"
                    className="w-full h-full object-contain group-hover:scale-110 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div className="flex flex-col gap-6 mt-8 ">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-green-400">
                      {item.category}
                    </h3>
                    <h3 className="font-bold text-yellow-400">
                      {item.rating.rate}
                    </h3>
                  </div>
                  <h3 className=" font-bold max-h-5">RP .{item.title}</h3>
                  <h3 className="max-h-5 mt-2">$ {item.price}</h3>
                  <button
                    type="button"
                    className="bg-green-700  hover:bg-green-800 text-white rounded-lg text-sm py-3 px-8 "
                    onClick={() => handleClickBuy(item)}>
                    BUY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
