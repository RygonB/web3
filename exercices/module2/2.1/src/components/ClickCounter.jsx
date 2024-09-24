import { useState } from "react";

const ClickCounter = ({ title, message }) => {
  const [count, setCount] = useState(false);

  const handleClick = () => setCount((count) => count + 1);
  return (
    <div>
      <button onClick={handleClick}>
        Click me
        <h4>{count}</h4>
      </button>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};
export default ClickCounter;
