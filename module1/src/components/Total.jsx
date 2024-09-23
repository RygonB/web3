const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercices
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

export default Total;
