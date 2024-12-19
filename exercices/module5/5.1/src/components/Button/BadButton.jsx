import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";
const BadButton = () => {
  const { increaseBad } = useContext(ButtonContext);
  return <button onClick={increaseBad}>Increase bad</button>;
};

export default BadButton;
