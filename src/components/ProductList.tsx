import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
          {products.map((product) => (
            <div key={product._id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.currentPrice}₹</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
