import React from "react";
import thumbnail1 from "./../../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "./../../../assets/images/icon-delete.svg";

const Cart: React.FC = () => {
  const text = "Autumn Limited Edition Sneakers";

  return (
    <article
      className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
      style={{
        zIndex: 1000,
      }}
    >
      <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>

      <div className="flex items-center justify-between">
        <img
          src={thumbnail1}
          alt="Autumn Limited Edition Sneakers Thumbnail"
          className="rounded-lg w-14"
        />
        <ul>
          <li className="text-slate-600 text-sm">{`${text.substring(
            0,
            23
          )}...`}</li>
          <li className="text-slate-600 text-sm">
            $125.00 x 3{" "}
            <span className="font-bold text-slate-900">$375.00</span>
          </li>
        </ul>

        <button aria-label="Remove item from cart">
          <img src={iconDelete} alt="Delete icon" />
        </button>
      </div>

      <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
        Checkout
      </button>
    </article>
  );
};

export default Cart;
