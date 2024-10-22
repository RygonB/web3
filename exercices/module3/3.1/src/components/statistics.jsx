const Statistics = ({ good, neutral, bad, all }) => {
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
};
export default Statistics;
