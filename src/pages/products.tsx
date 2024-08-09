import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          const productsData: Product[] = response.data
            .slice(0, 10)
            .map((item: any) => ({
              id: item.id,
              title: item.title,
              price: item.price,
              image: item.image,
            }));
          setProducts(productsData);
        })
        .catch(() => {
          setError("Failed to fetch products. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="mt-2 text-gray-500">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-orange-500 text-white hover:bg-orange-600 transition-all py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
