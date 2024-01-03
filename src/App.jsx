import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/cart/CartModal";
import Filter from "./components/Filter";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleToModal = () => {
    setIsOpenModal(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}
      <Header handleToModal={handleToModal} />
      <Hero />
      <main className="max-w-7xl mx-auto px-4">
        <Filter />
        <ProductList />
      </main>
    </>
  );
}

export default App;
