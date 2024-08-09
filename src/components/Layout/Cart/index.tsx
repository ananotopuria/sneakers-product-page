import React from "react";
import thumbnail1 from "./../../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "./../../../assets/images/icon-delete.svg";

interface CartItem {
  product: {
    mainImage: string;
    thumbnail: string;
  };
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemove: (index: number) => void;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemove, onClose }) => {
  return (
    <article
      className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
      style={{ zIndex: 1000 }}
    >
      <button
        className="absolute top-4 right-4"
        aria-label="Close cart"
        onClick={onClose}
      >
        <span className="text-xl">&times;</span>
      </button>
      <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <img
              src={item.product.thumbnail}
              alt="Product Thumbnail"
              className="rounded-lg w-14"
            />
            <ul>
              <li className="text-slate-600 text-sm"><p>Fall Limited Edition Sneakers</p></li>
              <li className="text-slate-600 text-sm">
                ${125.00} x {item.quantity}{" "}
                <span className="font-bold text-slate-900">${125.00 * item.quantity}</span>
              </li>
            </ul>

            <button aria-label="Remove item from cart" onClick={() => onRemove(index)}>
              <img src={iconDelete} alt="Delete icon" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-slate-600">Your cart is empty.</p>
      )}

      {cartItems.length > 0 && (
        <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      )}
    </article>
  );
};

export default Cart;
