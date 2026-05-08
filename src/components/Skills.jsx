function Skills() {

  const skills = [

    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
    "TensorFlow",
    "Flask",
    "JDBC",
    "Streamlit",
    "OOPs",
    "DBMS",
    "OS",
    "SDLC"

  ];

  return (
    <section id="skills">

      <h2 className="title">Skills</h2>

      <div className="skills-container">

        {
          skills.map((skill, index) => (

            <div className="skill-card" key={index}>
              {skill}
            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Skills;