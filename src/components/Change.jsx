const Change = ({ change }) => {
  return (
    <div className="Change">
      <h2>Change Return</h2>
      <p>Change: {change.toFixed(2)} EUR</p>
    </div>
  );
};

export default Change;
