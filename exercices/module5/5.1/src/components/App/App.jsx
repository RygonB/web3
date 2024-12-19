import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import { Context as CounterContext } from "../../contexts/countersContext";
import { useContext } from "react";

const App = () => {
  const { good, ok, bad } = useContext(CounterContext);
  return (
    <div>
      <ul>
        <li>
          <span>Good : {good}</span> <GoodButton />
        </li>
        <li>
          <span>Ok : {ok}</span> <OkButton />
        </li>
        <li>
          <span>Bad : {bad}</span> <BadButton />
        </li>
      </ul>
    </div>
  );
};

export default App;
