import { useState } from "react";

const CoinInsert = ({ onInsertCoin, onResetCoins }) => {
  const [coin, setCoin] = useState("");
  const [totalCoins, setTotalCoins] = useState(0);
  const acceptedDenominations = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];

  const handleInsertCoin = () => {
    const parsedCoin = parseFloat(coin);

    if (
      !isNaN(parsedCoin) &&
      coin &&
      acceptedDenominations.includes(parseFloat(coin))
    ) {
      const insertedCoin = parseFloat(coin);
      onInsertCoin(parseFloat(coin));
      setTotalCoins(totalCoins + insertedCoin);
      setCoin("");
    } else {
      alert("Invalid coin denomination. Please use accepted denominations.");
    }
  };

  const handleReset = () => {
    setCoin("");
    setTotalCoins(0);
    onResetCoins();
  };

  return (
    <div className="CoinInsert">
      <p>Accepted denominations:</p>
      <ul className="denomination-list">
        {acceptedDenominations.map((denomination) => (
          <li key={denomination}>{denomination} EUR</li>
        ))}
      </ul>
      <h2>Coin Insert</h2>
      <p>Total inserted coins: {totalCoins.toFixed(2)} EUR</p>
      <input
        type="text"
        placeholder="Insert coin (EUR)"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />
      <button onClick={handleInsertCoin}>Insert Coin</button>
      <button className="total-reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CoinInsert;
