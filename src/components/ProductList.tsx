import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext"; // Import cart context

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { items, addToCart } = useCart(); // Use cart context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => {
            const inCart = items.find(item => item.id === product.id);
            return (
              <div key={product._id} className="border p-4 shadow rounded">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-green-600 font-bold">{product.currentPrice} ₹</p>

                {inCart ? (
                  <p className="text-blue-600 mt-2">Quantity: {inCart.quantity}</p>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
