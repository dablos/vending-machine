import { useState, useEffect } from "react";
import { getProducts } from "../api";
import coffeeImg from "../assets/coffee-img.jpeg";

const Products = ({ onBuy }) => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleCreateProduct = () => {
    if (
      newProductName.trim() !== "" &&
      !isNaN(newProductPrice) &&
      newProductPrice > 0
    ) {
      const newProduct = {
        id: Date.now(), // Simple way to generate a unique ID
        name: newProductName,
        price: parseFloat(newProductPrice),
      };

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProductName("");
      setNewProductPrice("");
    }
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="Products">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img className="product-image" src={coffeeImg} alt="Product" />
            <div className="product-details">
              <strong>{product.name}</strong>
              <span>{product.price.toFixed(2)} EUR</span>
            </div>
            <button className="product-buy-btn" onClick={() => onBuy(product)}>
              Buy
            </button>
            <button
              className="product-del-btn"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="new-product-form">
        <input
          type="text"
          placeholder="New Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Product Price (EUR)"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <button className="add-product-btn" onClick={handleCreateProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Products;
