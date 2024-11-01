import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <div>
     <tr>
      <td>{text}</td>
      <td>{value}</td>
     </tr>
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, average }) => {
  if (all < 1) return <p>No feedback given</p>;
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"all"} value={all} />
      <StatisticsLine text={"average"} value={average} />
    </div>
  );
};

const HandleButton = ({ handle, message }) => {
  return (
    <div>
      <button onClick={handle}>{message}</button>
    </div>
  );
};

const Loading =() =>{
  return <p>Loading ...</p>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false),3000);

  if(loading) return <Loading/>
  
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
        <HandleButton handle={handleClickGood} message={"good"} />
        <HandleButton handle={handleClickNeutral} message={"neutral"} />
        <HandleButton handle={handleClickBad} message={"bad"} />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
      />
    </div>
  );
};

export default App;
