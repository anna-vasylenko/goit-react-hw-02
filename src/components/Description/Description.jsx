import s from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.descr}>{description}</p>
    </div>
  );
};

export default Description;
