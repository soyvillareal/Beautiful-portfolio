import s from './Section.module.scss';
      
const Section = ({ sectionId, children }) => {
  return (
    <section id={sectionId} className={`${s.container}${s[sectionId] ? ` ${s[sectionId]}` : ''}`}>
      <div className={s.content}>{children}</div>
    </section>
  );
};

export default Section;
