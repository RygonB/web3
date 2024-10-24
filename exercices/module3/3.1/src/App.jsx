import { useState } from "react";

const Statistics = (props) =>{
  const {good, neutral, bad, all, average} = props;
  return(
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
    </div>
  );
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const average = all !== 0 ? (good - bad) / all : 0;
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleClickGood}>good</button>
        <button onClick={handleClickNeutral}>neutral</button>
        <button onClick={handleClickBad}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
    </div>
  );
};

export default App;
