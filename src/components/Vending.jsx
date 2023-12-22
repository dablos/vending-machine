import { useState, useEffect } from "react";
import Products from "./Products";
import CoinInsert from "./CoinInsert";
import Change from "./Change";
import { getProducts } from "../api";

const Vending = () => {
  const [coinsInserted, setCoinsInserted] = useState(0);
  const [change, setChange] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleBuy = (product) => {
    if (product.price <= coinsInserted) {
      setChange(coinsInserted - product.price);
      setCoinsInserted(0);
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, inventory: p.inventory - 1 } : p
        )
      );
    } else {
      alert("Not enough funds!");
    }
  };

  const handleInsertCoin = (coin) => {
    setCoinsInserted(coinsInserted + coin);
  };

  const handleResetCoins = () => {
    setCoinsInserted(0);
  };

  const handleReset = () => {
    setCoinsInserted(0);
    setChange(0);
  };

  return (
    <div className="Vending">
      <h1>Vending Machine</h1>
      <CoinInsert
        onInsertCoin={handleInsertCoin}
        onResetCoins={handleResetCoins}
      />
      <Products products={products} onBuy={handleBuy} />
      <Change change={change} />
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Vending;
