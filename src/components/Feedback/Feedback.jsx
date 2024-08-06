import s from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  return (
    <ul className={s.list}>
      {feedback.map(([key, value]) => (
        <li key={key}>
          <span>
            {key}: {value}
          </span>
        </li>
      ))}
      <li>
        <span>Positive: {positiveFeedback}%</span>
      </li>
    </ul>
  );
};

export default Feedback;
