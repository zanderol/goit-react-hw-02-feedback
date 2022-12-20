import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.Title}>{title}</h1>
      {children}
    </>
  );
};
