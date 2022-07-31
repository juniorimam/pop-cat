import "../index.css";

const Counter = ({ count }) => {
  localStorage.setItem("COUNT", count);
  return (
    <div className="counter">
      <div className="counter-text">{count}</div>
    </div>
  );
};

export default Counter;
