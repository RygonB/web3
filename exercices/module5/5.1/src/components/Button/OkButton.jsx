import { useContext } from "react";
import { Context as ButtonContext } from "../../contexts/countersContext";

const OkButton = () => {
  const { increaseOk } = useContext(ButtonContext);
  return <button onClick={increaseOk}>Increase Ok</button>;
};

export default OkButton;