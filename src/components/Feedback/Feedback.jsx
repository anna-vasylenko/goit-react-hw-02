import s from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  return (
    <ul className={s.list}>
      {feedback.map(([key, value]) => (
        <li key={key}>
          <span className={s.item}>
            {key}: {value}
          </span>
        </li>
      ))}
      <li>
        <span className={s.item}>Positive: {positiveFeedback}%</span>
      </li>
    </ul>
  );
};

export default Feedback;
