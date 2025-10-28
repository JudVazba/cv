const Section = ({ title, children }) => (
  <section className="cv-section">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

export default Section;