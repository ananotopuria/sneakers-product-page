import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import Lightbox from "../components/Layout/Lightbox";
import Cart from "../components/Layout/Cart";
import Header from "../components/Layout/Header";

import image1 from "../assets/images/image-product-1.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

interface Product {
  id: number;
  mainImage: string;
  thumbnail: string;
}

const data: Product[] = [
  {
    id: 1,
    mainImage: image1,
    thumbnail: thumbnail1,
  },
  {
    id: 2,
    mainImage: image2,
    thumbnail: thumbnail2,
  },
  {
    id: 3,
    mainImage: image3,
    thumbnail: thumbnail3,
  },
  {
    id: 4,
    mainImage: image4,
    thumbnail: thumbnail4,
  },
];

const HomePage: React.FC = () => {
  const [products] = useState<Product[]>(data);
  const [value, setValue] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [showLightbox, setShowLightbox] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleMinus = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 0));
  };

  const handleAddToCart = () => {
    if (amount > 0) {
      const newItem = { product: products[value], quantity: amount };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setAmount(0);
    }
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onClose={() => setShowCart(false)}
        />
      )}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt={`Product ${item.id}`}
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt={`Product ${products[value].id}`}
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt={`Thumbnail ${item.id}`} className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneaker company
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="Decrease amount" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <img src={plus} alt="Increase amount" />
              </li>
            </ul>

            <div className="lg:flex-1">
              <button
                className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200"
                onClick={handleAddToCart}
              >
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>

      <button
        className="fixed bottom-8 right-8 bg-orange-500 p-3 rounded-full text-white shadow-lg"
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShoppingCart />
      </button>
    </>
  );
};

export default HomePage;
