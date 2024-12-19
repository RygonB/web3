import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const GoodButton = () => {
  const { increaseGood } = useContext(ButtonContext);
  return <button onClick={increaseGood}>Increase good</button>;
};

export default GoodButton;
