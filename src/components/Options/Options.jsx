import s from "./Options.module.css";

const Options = ({ options, handleClick, handleResetClick, total }) => {
  return (
    <ul className={s.list}>
      {options.map((item) => (
        <li key={item}>
          <button onClick={() => handleClick(item)} className={s.btn}>
            {item}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li className={s.item}>
          <button onClick={() => handleResetClick()} className={s.btn}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
