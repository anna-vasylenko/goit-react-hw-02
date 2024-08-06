const Options = ({ options, handleClick, handleResetClick, total }) => {
  return (
    <ul>
      {options.map((item) => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button onClick={() => handleResetClick()}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
